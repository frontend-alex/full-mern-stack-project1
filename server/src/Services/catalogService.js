const Catalog = require('../Schemas/Catalog')

exports.createOne = (imageUrl, title, description, price, quantity) =>
  Catalog.create({ imageUrl, title, description, price, quantity });