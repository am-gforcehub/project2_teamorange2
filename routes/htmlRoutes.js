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
  app.get("/item/:id", function(req, res) {
    console.log(req.params.id);
    db.Product.findOne({ where: { id: req.params.id } }).then(function(data) {
      var hndlbrsObj = {
        item: data
      };
      console.log(hndlbrsObj);
      res.render("single", hndlbrsObj);
    });
  });

  // load the form for creating a new product
  app.get("/new", function(req, res) {
    res.render("new");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
