const ProductManagerController = require('../controllers/productManager.controller');



module.exports = (app) => {

  app.get("/api/ProductManager", ProductManagerController.findAllProductManagers);

  app.get("/api/ProductManager/:id", ProductManagerController.findOneProductManager);

  app.put("/api/ProductManager/:id", ProductManagerController.updateOneProductManager);

  app.post("/api/ProductManager", ProductManagerController.createProductManager);

  app.delete("/api/ProductManager/:id", ProductManagerController.deleteOneProductManager);

}

// :id refers to req.params.id
// so it could be . . . . 
// :anythingYouWant ---> req.params.anythingYouWant