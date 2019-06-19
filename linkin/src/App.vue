<template>
  <div id="app" class="conatiner mt-5">
    <h1>My Shop</h1>
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
    <product-list
      :maximum="maximum"
      :products="products"
      @add="addItem"
    ></product-list>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductList from "./components/ProductList";
import PriceSlider from "./components/PriceSlider";

export default {
  name: "app",
  data: function() {
    return {
      maximum: 99,
      sliderStatus: true,
      cart: [],
      products: null
    };
  },
  components: {
    ProductList,
    FontAwesomeIcon,
    PriceSlider
  },
  methods: {
    addItem: function(product) {
      var whichProduct;
      var existing = this.cart.filter(function(item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    }
  },
  mounted: function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  }
};
</script>
