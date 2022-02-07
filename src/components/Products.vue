<template>
  <v-container fluid>
    <h1>Products Page</h1>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="!!error">Oops... The following error ocured: {{ error }}</h2>
    <v-row align="center" justify="space-between">
      <v-col
        v-for="product in products"
        :key="product.id"
        style="max-width: 30%"
      >
        <v-card>
          <v-img :src="product.image"> </v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>
            <p>Color: {{ product.color }}</p>
            <p>Price: {{ product.price }}</p>
          </v-card-text>
          <v-card-actions>
            <router-link
              :to="{
                name: 'productDetails',
                params: { id: product.id, product }
              }"
            >
              <v-btn text>
                Details
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import axios from "axios";
export default {
  setup() {
    const loading = ref(true);
    const error = ref(null);
    const products = reactive([]);
    axios
      .get(
        "https://first-vue-app-7f4a3-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then(res => {
        const data = res.data;
        for (let key in data) {
          const product = data[key];
          product.id = key;
          products.push(product);
        }
      })
      .catch(err => (error.value = err))
      .finally(() => {
        loading.value = false;
      });

    return { loading, products, error };
  }
};
</script>

<style></style>
