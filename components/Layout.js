app.component("main-layout", {
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      if (this.cart.includes(id)) this.cart.splice(this.cart.indexOf(id), 1);
    },
  },
  template:
    /*html*/
    `<div class="nav-bar"></div>
      <div class="cart">Cart({{ cart.length }})</div>
      <product-display
        :premium="premium"
        :cart='cart'
        @add-to-cart="updateCart"
        @remove-from-cart='removeItem'
      ></product-display>`,
});
