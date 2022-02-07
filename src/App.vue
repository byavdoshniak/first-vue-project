<template>
  <v-app>
    <v-app-bar app color="#020202">
      <router-link to="/">
        <v-app-bar-title style="color:white">First Vue Project</v-app-bar-title>
      </router-link>
      <v-spacer></v-spacer>
      <template v-for="link in links">
        <router-link :to="link.to" :key="link.title">
          <v-chip link class="header-link">{{ link.title }}</v-chip>
        </router-link>
      </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { links } from "./mixins/links";
export default {
  mixins: [links]
};
</script>

<style>
.header-link {
  margin: 10px;
}
</style>
