<template>
  <div class="container">
    <div v-if="news.length > 0">
      <div class="row">
        <div
          class="card mt-4 col-xl-3 col-lg-6 col-sm-12"
          v-for="(n, i) of news"
          :key="i"
        >
          <div class="card-body">
            <div v-if="n.urlToImage">
              <img
                :src="n.urlToImage"
                class="card-img-bottom"
                alt="Sorry, not foto"
              />
            </div>
            <div v-else>
              <img
                src="/nophoto.png"
                class="card-img-bottom"
                alt="Sorry, not foto"
              />
            </div>
            <h5 class="card-title mt-2">{{ n.title }}</h5>
            <p class="card-text">{{ n.description }}</p>
            <div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  @click="openNewWin(n.url)"
                >
                  Read
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="center">
        <img class="card-img-bottom" src="/nonews.webp" />
      </div>
    </div>
  </div>
</template>

<script>
import { requests, utils, DEF_COUNTRY } from "~/mixins/utilsMixin";
const { getData } = require("country-list");

export default {
  mixins: [requests, utils],
  data() {
    return {
      news: [],
      countries: getData()
    };
  },
  beforeMount() {
    this.getNewsByCountry();
  },

  methods: {
    async getNewsByCountry() {
      const data = await this.getNews(
        this.$route.params.countryCode
          ? this.$route.params.countryCode
          : DEF_COUNTRY.code
      );
      this.news = data.articles;
    }
  }
};
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
