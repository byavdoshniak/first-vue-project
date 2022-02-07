<template>
  <v-container>
    <h1>Add Produt page</h1>
    <v-form v-model="valid" ref="formRef" lazy-validation>
      <v-text-field
        v-model="form.name"
        :counter="20"
        prepend-icon="mdi-rename-box"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.color"
        :counter="10"
        prepend-icon="mdi-invert-colors"
        :rules="colorRules"
        label="Color"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.price"
        :counter="10"
        prepend-icon="mdi-currency-usd"
        :rules="priceRules"
        label="Price"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.image"
        :counter="null"
        prepend-icon="mdi-image-search-outline"
        :rules="imageRules"
        label="Image URL"
        required
      ></v-text-field>
    </v-form>
    <v-btn
      type="submit"
      class="mt-5"
      @click.prevent="handleSubmit"
      :disabled="!valid"
      >Submit</v-btn
    >
  </v-container>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
import axios from "axios";
import { addProductRules } from "../consts/add-product-rules";
import { initialForm } from "../consts/consts";
export default {
  setup() {
    const nameRules = ref(addProductRules.nameRules);
    const colorRules = ref(addProductRules.colorRules);
    const priceRules = ref(addProductRules.priceRules);
    const imageRules = ref(addProductRules.imageRules);
    const valid = ref(true);
    const formRef = ref(null);
    const form = reactive(initialForm);
    const handleSubmit = () => {
      valid.value = formRef.value.validate();
      if (valid.value) {
        axios
          .post(
            "https://first-vue-app-7f4a3-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            form
          )
          .then(responce => console.log(responce))
          .catch(error => console.log(error));
        formRef.value.reset();
      }
    };
    return {
      nameRules,
      colorRules,
      priceRules,
      imageRules,
      form,
      formRef,
      valid,
      handleSubmit
    };
  }
};
</script>

<style></style>
