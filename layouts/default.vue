<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/">News</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{this.activeCountryName}}</a>
            <div class="dropdown-menu scroll-menu" aria-labelledby="navbarDropdown">
              <nuxt-link
                class="dropdown-item"
                :to="`/news/${c.code}`"
                v-for="(c, i) of countries"
                :key="i"
              >{{ c.name }}</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>
<script>
const { getData } = require("country-list");
import { utils } from "~/mixins/utilsMixin";
export default {
  mixins: [utils],
  data() {
    return {
      countries: getData()
    };
  },

  computed: {
    activeCountryName() {
      return this.getCountryName(this.countries);
    }
  }
};
</script>
<style scoped>
.bg-light {
  background-color: lightcoral !important;
}
.scroll-menu {
  overflow-y: auto;
  max-height: 40vh;
}
</style>
