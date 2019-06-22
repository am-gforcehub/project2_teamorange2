var db = require("../models");

// ********************** MIGHT NEED GET ROUTE ON /:ID THAT GIVES JSON FOR RENDERING ITEM *******************************

module.exports = function(app) {
  // Get all examples
  app.get("/api", function(req, res) {
    db.Product.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/new", function(req, res) {
    db.Product.create(req.body).then(function(dbExample) {
      console.log(req.body);
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/:id", function(req, res) {
    db.Product.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
