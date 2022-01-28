const movies = require('../data.json');

const resolvers = {
  Query: {
    getTitles() {
      return movies;
    },
  },
}

module.exports = { resolvers };