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
  inStock: {
    type: Boolean,
    required: true,
  },

  itemDescription:{
    color : {
      type: String,
      required: true
    },
    size : {
      type: String,
      required: true
    },
    condition : {
      type: String,
      required: true
    },

  },

  owner: {
    type: String, 
    required: true
  }
});

const Catalog = model("catalog", CatalogSchema);

module.exports = Catalog;
