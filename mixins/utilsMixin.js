const APIURL = "https://newsapi.org/v2";
export const DEF_COUNTRY = {
  code: "RU",
  name: "Russian Federation"
};

export const requests = {
  methods: {
    async getNews(country) {
      return await (
        await fetch(
          `${APIURL}/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`
        )
      ).json();
    },
    async getEverything(keyword) {
      return await (
        await fetch(
          `${APIURL}/everything?q=${keyword}&apiKey=${process.env.API_KEY}`
        )
      ).json();
    }
  }
};

export const utils = {
  methods: {
    openNewWin(url) {
      window.open(url, "_blank");
    },
    getCountryName(countries) {
      const country = countries.find(
        c => c.code == this.$route.params.countryCode
      );
      return country ? country.name : DEF_COUNTRY.name;
    }
  }
};
