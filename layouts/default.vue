<template>
  <v-app>
    <v-app-bar
      fixed
      app
      class="elevation-0"
      color="primary white--text"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn
        :to="'/'"
        class="elevation-0"
      >
        <v-icon left>
          fa-users
        </v-icon>
        <v-list-item-title>
          Users
        </v-list-item-title>
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer
      app
      color="primary white--text">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
})
export default class Default extends Vue {
  title = 'PandaCraft Technical Test'
}
</script>

<style>
.v-application ul {
  padding-left: 0;
}
</style>
