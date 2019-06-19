<template>
  <div id="app" class="conatiner mt-5">
    <h1>My Shop</h1>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle="toggleSliderStatus"
    ></navbar>
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
import Navbar from "./components/Navbar";

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
    Navbar,
    ProductList,
    FontAwesomeIcon,
    PriceSlider
  },

  computed: {
    cartTotal: function() {
      let sum = 0;
      for (key in this.cart) {
        sum = sum+(this.cart[key].product.price * this.cart[key].qty);
      }
      return sum;
    },
    cartQty: function() {
      let qty = 0;
      for (key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
    sliderState: function() {
      return this.sliderStatus ? 'd-flex': 'd-none'
    }
  },

  methods: {
    toggleSliderStatus: function() {
      this.sliderStatus = !this.sliderStatus;
    },

    deleteItem: function(id) {
      if(this.cart[id].qty>1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },

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
