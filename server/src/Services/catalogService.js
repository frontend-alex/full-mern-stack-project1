const Catalog = require('../Schemas/Catalog')

exports.createOne = (imageUrl, title, description, price, quantity, owner) =>
  Catalog.create({ imageUrl, title, description, price, quantity, owner});