<template>
  <v-list-item>
    <v-list-item-icon v-if="todo.completed">
      <v-icon>fa-check-square</v-icon>
    </v-list-item-icon>
    <v-list-item-icon v-else>
      <v-icon>fa-square</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ todo.title }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { TodoType } from '~/types/TodoType'

@Component({
})
export default class TodoListItem extends Vue {
  @Prop() todo!: TodoType
}
</script>
