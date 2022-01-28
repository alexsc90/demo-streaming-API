const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./Schema/typeDefs');
const { resolvers } = require('./Schema/resolvers');
const path = require('path');
const indexRoutes = require('./routes/index');

(async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/api/titles', indexRoutes);

  app.listen(4000, () => {
    console.log('Server running on port 4000');
  });
})();
