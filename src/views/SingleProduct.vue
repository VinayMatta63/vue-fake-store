<template>
  <div class="product-page" v-if="productData != null">
    <img class="product-page-image" :src="productData.image" />
    <div class="product-page-details">
      <span class="product-page-title">
        {{ productData.title }}
      </span>
      <span class="product-page-price">Rs. {{ productData.price }}</span>
      <p class="product-page-desc">
        {{ productData.description }}
      </p>
      <router-link to="/cart">
        <button
          class="product-page-cart"
          @click="$store.dispatch('addToCart', productData)"
        >
          Add To Cart
        </button>
      </router-link>
    </div>
  </div>
  <img class="loader" v-else src="../assets/loader.gif" />
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const productData = ref(null);
    const route = useRoute();
    const store = useStore();
    const id = route.params.id;
    store
      .dispatch("fetchProductById", id)
      .then(() => (productData.value = store.getters.getProductData))
      .catch((err) => console.log(err.message));
    return { productData };
  },
};
</script>

<style>
.product-page {
  display: flex;
  margin: 20px;
  justify-content: space-evenly;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.product-page-image {
  flex: 0.4;
  width: 100%;
  max-width: 300px;
  max-height: 500px;
}
.product-page-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 350px;
  text-align: justify;
}
.product-page-title {
  font-size: 22px;
  font-weight: 500;
  text-overflow: ellipsis;
}
.product-page-price {
  font-size: 25px;
  font-weight: 600;
  margin: 20px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-page-desc {
  max-width: 350px;
  text-align: justify;
}
.product-page-cart {
  align-self: center;
  margin-top: 30px;
  padding: 8px 13px;
  outline: none;
  background-color: #42b983;
  color: whitesmoke;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.product-page-cart:hover {
  transform: scale(1.03);
  transition-duration: 300ms;
  background-color: #36976b;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
