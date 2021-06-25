<template>
  <v-container>
    <v-breadcrumbs :items="breadcrumbsItems">
      <template v-slot:divider>
        <v-icon>fa-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1>Users list</h1>
    <v-data-table
      :headers="datatableHeaders"
      :items="userList"
      :loading="loadingUsers"
      item-key="id"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          color="orange"
          text
          :to="`/users/${item.id}`"
        >
          VIEW DETAILS
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UserType } from '~/types/UserType'
import UserCard from '~/components/UserCard.vue'

@Component({
  components: { UserCard }
})
export default class Index extends Vue {
  userList: UserType[] = []
  loadingUsers = true
  datatableHeaders = [
    { text: 'Id', value: 'id' },
    { text: 'Username', value: 'username' },
    { text: 'Email', value: 'email' },
    { text: 'Company name', value: 'company.name' },
    { text: 'More info', value: 'actions', sortable: false }
  ]
  breadcrumbsItems = [
    {
      text: 'Users',
      disabled: true
    }
  ]

  async mounted () {
    this.userList = (await this.$axios.get('/users')).data
    this.loadingUsers = false
  }
}
</script>
