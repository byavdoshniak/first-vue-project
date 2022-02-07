<template>
  <v-container>
    <h1>Product id: {{ $route.params.id }}</h1>
    <p>{{ product.name }}</p>
    <p>{{ product.color }}</p>
    <p>{{ product.price }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      product: this.$attrs.product
    };
  }
};
</script>
