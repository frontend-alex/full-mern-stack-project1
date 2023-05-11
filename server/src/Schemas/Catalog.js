const { Schema, model } = require("mongoose");

const CatalogSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  owner: {
    type: String, 
    required: true
  }
});

const Catalog = model("catalog", CatalogSchema);

module.exports = Catalog;
