const express = require('express');
const router = express.Router();
const { resolvers } = require('../Schema/resolvers');

router.get('/', (req, res, next) => {
  const movies = resolvers.Query.getTitles();
  res.json(movies);
});

module.exports = router;