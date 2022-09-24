module.exports = app => {
  const bookController = require("../controllers/book.controller.js");

  const router = require("express").Router();

  router.post("/", bookController.create);

  router.get("/", bookController.findAll);

  router.get("/published", bookController.findAllPublished);

  router.get("/:id", bookController.findOne);

  router.put("/:id", bookController.update);

  router.delete("/:id", bookController.delete);

  router.delete("/", bookController.deleteAll);

  app.use("/api/books", router);
};
