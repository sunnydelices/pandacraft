<template>
  <v-card>
    <v-card-text>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-user</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ user.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ user.username }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-phone</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ user.phone }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-envelope</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ user.email }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-map-marker-alt</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ user.address.suite }} {{ user.address.street }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.address.zipcode }} {{ user.address.city }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-globe</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ user.website }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>fa-building</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ user.company.name }} </v-list-item-title>
          <v-list-item-subtitle>
            <div>{{ user.company.catchPhrase }}</div>
            <div>{{ user.company.bs }}</div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { UserType } from '~/types/UserType'

@Component({
})
export default class UserCard extends Vue {
  // prop
  @Prop() user!: UserType
}
</script>
