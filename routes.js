const { addBook } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/book',
    handler: addBook,
  },
];

module.exports = routes;
