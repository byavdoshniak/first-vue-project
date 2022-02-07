<template>
  <v-container>
    <v-card elevation="2" outlined class="mx-auto my-10" max-width="500">
      <v-card-title>This is the home page</v-card-title>
      <v-card-text>
        In order to start using app press one of the buttons below:
      </v-card-text>
      <v-card-actions>
        <template v-for="link in links">
          <router-link :to="link.to" :key="link.title">
            <v-chip link class="header-link">{{ link.title }}</v-chip>
          </router-link>
        </template>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { links } from "../mixins/links";
export default {
  mixins: [links]
};
</script>
