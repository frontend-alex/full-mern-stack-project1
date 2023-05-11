const catalogController = require("../Services/catalogService");
const Catalog = require('../Schemas/Catalog');

exports.getAllCatalog = async (req, res) => {
    const catalogItems = await Catalog.find().lean();
    
    try{
        res.json({ status: 201, res: catalogItems})
    }catch(err){
        const errors = Object.keys(err.errors).map(
            (keys) => err.errors[keys].message,
          );
          return res.status(404).json({ status: 404, error: errors });
    }
};

exports.getCatalogItem = (req, res) => {};

exports.postCatalogItem = async (req, res) => {
  const quantity = 1;
  const { imageUrl, title, description, price, owner } = req.body;
  
  console.log(req.body)

  try {
    const catalogItem = await catalogController.createOne(
      imageUrl,
      title,
      description,
      price,
      quantity,
      owner.owner
    );

  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (keys) => err.errors[keys].message,
    );
    return res.status(404).json({ status: 404, error: errors });
  }
};
