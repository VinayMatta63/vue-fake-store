<template>
  <h1>Products List</h1>
  <div class="products-cover">
    <div class="product-list" v-if="products">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
    <img class="loader" v-else src="../assets/loader.gif" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "Products",
  components: { ProductCard },
  setup() {
    const products = ref(null);
    const store = useStore();
    store
      .dispatch("fetchProducts")
      .then(() => (products.value = store.getters.getProducts));

    return { products };
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
  margin-top: 20px;
  justify-content: space-evenly;
  /* align-self: center; */
  margin: auto;
}
.product-cover {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
