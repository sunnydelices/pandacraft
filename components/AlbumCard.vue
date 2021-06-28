<template>
  <div>
    <v-card>
      <v-img
        :src="album.photos[0].thumbnailUrl"
        height="200px"
      ></v-img>
      <v-card-title class="headline">
        {{ album.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ photosNumber }} photos
      </v-card-subtitle>
      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { AlbumType } from '~/types/AlbumType'

@Component({
})
export default class AlbumCard extends Vue {
  // prop
  @Prop() album!: AlbumType

  // computed
  get photosNumber () {
    return (this.album.photos?.length ?? 0)
  }
}
</script>
