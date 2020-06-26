const APIURL = "https://newsapi.org/v2";

export const requestsMixin = {
  methods: {
    async getHeadlines(country) {
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
