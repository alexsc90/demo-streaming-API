const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    getTitles: [Title]
  }

  type Title {
    title: String
    thumbnail: String
  }
`;

module.exports = { typeDefs };