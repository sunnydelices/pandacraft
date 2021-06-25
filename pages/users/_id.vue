<template>
  <v-container>
    <v-breadcrumbs :items="breadcrumbsItems">
      <template v-slot:divider>
        <v-icon>fa-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <h2>Infos</h2>
        <user-card :user="user" v-if="user" />
        <v-skeleton-loader
          v-else
          v-bind="loadersAttrs"
          type="list-item-avatar@3, list-item-avatar-two-line, list-item-avatar, list-item-avatar-three-line"
        />

        <h2>ToDos</h2>
        <v-card v-if="!isLoadingTodos">
          <todo-list-item v-for="todo in todosList" :key="todo.id" :todo="todo" />
        </v-card>
        <v-skeleton-loader
          v-else
          v-bind="loadersAttrs"
          type="list-item-avatar@5"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <h2>Posts</h2>
        <div v-if="!isLoadingPosts">
          <post-card v-for="post in postList" :key="post.id" :post="post" />
        </div>
        <v-skeleton-loader
          v-else
          v-bind="loadersAttrs"
          type="article, actions"
        />
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <h2>Albums</h2>
        <v-row v-if="!isLoadingAlbums">
          <v-col
            v-for="n in 2"
            :key="n"
          >
            <album-card v-for="album in albumList" :key="album.id" :album="album" />
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            v-for="n in 2"
            :key="n"
          >
            <v-skeleton-loader
              v-bind="loadersAttrs"
              type="card"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UserType } from '~/types/UserType'
import { PostType } from '~/types/PostType'
import { TodoType } from '~/types/TodoType'
import { AlbumType } from '~/types/AlbumType'
import UserCard from '~/components/UserCard.vue'
import PostCard from '~/components/PostCard.vue'
import TodoListItem from '~/components/TodoListItem.vue'
import AlbumCard from '~/components/AlbumCard.vue'

@Component({
  components: { UserCard, PostCard, TodoListItem, AlbumCard }
})
export default class User extends Vue {
  userId: string = this.$route.params.id
  user: UserType | null = null
  isLoadingPosts = true
  isLoadingTodos = true
  isLoadingAlbums = true
  breadcrumbsItems = [
    {
      text: 'Users',
      disabled: false,
      href: '/'
    }
  ]
  loadersAttrs: any = {
    class: 'mb-6',
    boilerplate: true,
    elevation: 1
  }

  postList: PostType[] = []
  todosList: TodoType[] = []
  albumList: AlbumType[] = []

  async mounted () {
    const userResponse = await this.$axios.get(`/users/${this.userId}`)
    this.user = userResponse.data
    this.breadcrumbsItems.push({
      text: this.user?.name ?? '',
      disabled: true,
      href: '#'
    })

    const todosResponse = await this.$axios.get(`/todos?userId=${this.userId}`)
    this.todosList = todosResponse.data
    this.isLoadingTodos = false

    const postsResponse = await this.$axios.get(`/posts?userId=${this.userId}`)
    this.postList = postsResponse.data
    await Promise.all(
      this.postList.map(async (post) => {
        const commentResponse = await this.$axios.get(`/posts/${post.id}/comments`)
        post.comments = commentResponse.data
      })
    )
    this.isLoadingPosts = false

    const albumsResponse = await this.$axios.get(`/albums?userId=${this.userId}`)
    this.albumList = albumsResponse.data
    await Promise.all(
      this.albumList.map(async (album) => {
        const photosResponse = await this.$axios.get(`/albums/${album.id}/photos`)
        album.photos = photosResponse.data
      })
    )
    this.isLoadingAlbums = false
  }
}
</script>

<style lang="scss">
.v-card {
  margin-bottom: 15px;
}
</style>
