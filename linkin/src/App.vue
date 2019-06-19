<template>
  <div id="app" class="conatiner mt-5">
    <h1>My Shop</h1>
    <p class="animated FadeInRight">Take a look at are offerings</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price value="4.52"></price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from './components/Price';

export default {
  name: "app",
  components: {
    FontAwesomeIcon,
    Price
  }
};
</script>

