module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-mentoring/" : "/",
  pages: {
    index: {
      entry: "src/mainPage.js",
      title: "Main Page"
    },
    details: {
      entry: "src/filmDetailPage.js",
      title: "Film Detail Page"
    }
  }
};
