<template>
  <div>
    <v-card>
      <v-card-title class="headline">
        {{ post.title }}
      </v-card-title>
      <v-card-text>
        {{ post.body }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-icon left>fa-comment</v-icon>
        {{ commentsNumber }} comments
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="commentsShow = !commentsShow"
        >
          <v-icon
            color="orange lighten-2"
            small
          >
            {{ commentsShow ? 'fa-chevron-up' : 'fa-chevron-down' }}
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="commentsShow">
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="comment in post.comments"
              :key="comment.id"
              small
            >
              <div>
                <div>
                  <strong>{{ comment.name }}</strong>
                </div>
                <div>{{ comment.body }}</div>
                <div><v-icon x-small left>fa-user-circle</v-icon> <span>{{ comment.email }}</span></div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-expand-transition>
    </v-card>
    <v-spacer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { PostType } from '~/types/PostType'

@Component({
})
export default class PostCard extends Vue {
  // prop
  @Prop() post!: PostType

  // data
  commentsShow = false

  // computed
  get commentsNumber () {
    return (this.post.comments?.length ?? 0)
  }
}
</script>
