<template>
  <router-link :to="{ name: 'Product', params: { id: product.id } }">
    <div class="card">
      <div class="product-image-cover">
        <img class="product-image" :src="product.image" />
      </div>
      <span class="product-title">{{ product.title }}</span>
      <span class="product-price">Rs. {{ product.price }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  setup(props) {},
};
</script>

<style>
a {
  text-decoration: none;
}
.card {
  color: black;
  width: 300px;
  height: 300px;
  display: flex;
  background-color: #fafafa;
  margin: 10px;
  margin-top: 20px;

  border-radius: 10px;
  padding: 20px;
  min-height: 150px;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.card:hover {
  transform: scale(1.02);
  transition-duration: 300ms;
  background-color: #42b983;
  color: whitesmoke;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
.product-image {
  max-width: 120px;
  margin-bottom: 30px;
  max-height: 150px;
}
.product-image-cover {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-title {
  font-size: 18px;
  font-weight: 500;
  flex: 0.4;
  text-overflow: ellipsis;
  max-width: 350px;
  text-align: justify;
}
.product-price {
  font-weight: 500;
  font-size: 22px;
}
</style>
