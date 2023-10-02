app.component("review-form", {
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      rec: false,
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        rec: this.rec,
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.rating = null;
      this.rec = false;
    },
  },
  template:
    /*html*/
    `<form class="review-form" @submit.prevent='onSubmit'>
  <h3>Leave a review</h3>

  <label for="name">Name:</label>
  <input id="name" v-model='name' />

  <label for="review">Review:</label>
  <textarea id="review" v-model='review' ></textarea>

  <label for="rating">Rating:</label>
  <select id="rating" v-model.number='rating' >
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>

  <p>Would you recommend?</p>
  <label>Yes<input type='radio' name='rec' value=true v-model='rec'/></label>
  <label>No<input type='radio' name='rec' value=false v-model='rec'/></label>

  <input class="button" type="submit" value="Submit" />

</form>`,
});
