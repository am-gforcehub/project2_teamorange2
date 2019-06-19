var db = require("../models");

module.exports = function(app) {
  // Load index page with all products for sale
  app.get("/", function(req, res) {
    db.Product.findAll({}).then(function(data) {
      var hndlbrsObj = {
        items: data
      };
      res.render("index", hndlbrsObj);
    });
  });

  // Load one product view!  ******************* USE THE DBEXAMPLE OBJECT TO SET UP HANDLEBARS TO INJECT ****************
  app.get("/single", function(req, res) {
    // where: { id: req.params.id  <-------- put this between the find brackets to specify what to grab from table
    db.Product.findOne({}).then(function(dbExample) {
      res.render("single");
    });
  });

  // load the form for creating a new product
  app.get("/new", function(req, res) {
    db.Product.findOne({}).then(function(dbExample) {
      res.render("new");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
