<template>
  <div class="cart-item">
    <img class="cart-item-image" :src="cartItem.image" />
    <div class="cart-item-details">
      <span class="cart-item-title">{{ cartItem.title }}</span>
      <span class="cart-item-price"> Rs. {{ cartItem.price }} </span>
      <span class="cart-item-quantity">Quantity: {{ cartItem.quantity }}</span>
      <span class="cart-item-buttons">
        <button
          class="cart-item-button"
          @click="$store.dispatch('removeFromCart', cartItem)"
        >
          -
        </button>
        <button
          class="cart-item-button"
          @click="$store.dispatch('addToCart', cartItem)"
        >
          +
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["cartItem"],
  setup(props) {},
};
</script>

<style>
.cart-item {
  color: black;
  width: 70vw;
  height: max-content;
  display: flex;
  background-color: #fafafa;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  min-height: 150px;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.cart-item-image {
  max-width: 120px;
  max-height: 150px;
  margin-right: 30px;
  flex: 0.4;
}
.cart-item-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.6;
  max-width: 350px;
  text-align: justify;
}
.cart-item-title {
  font-size: 18px;
  font-weight: 500;
  text-overflow: ellipsis;
}
.cart-item-buttons {
  display: flex;
  align-self: center;
}
.cart-item-button {
  font-size: 20px;
  width: 40px;
  border: none;
  outline: none;
  margin: 10px;
  background-color: #42b983;
  color: whitesmoke;
  border-radius: 2px;
}
</style>
