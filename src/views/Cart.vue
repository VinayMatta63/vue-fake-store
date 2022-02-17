<template>
  <h1 class="head">Cart</h1>
  <span class="cart-total">Total : Rs. {{ $store.getters.cartTotal }}</span>
  <div
    v-for="cartItem in $store.getters.getCart"
    :key="cartItem.id"
    class="cart-list"
  >
    <CartItem :cartItem="cartItem" />
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem },
};
</script>

<style>
.head {
  font-weight: 600;
}
.cart-total {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
}
.cart-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
</style>
