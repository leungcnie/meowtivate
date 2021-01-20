module.exports = (router, db) => {
  // Get example with id
  router.get("/:id", (req, res) => {
    const exampleID = req.params.id;
    db.getExampleWithID(exampleID).then((example) => {
      res.json(example);
    });
    // res.send("Check the console for data!");
  });

  router.post("/", (req, res) => {
    // const exampleID = req.params.id;
    const { text } = req.body;
    console.log("text-con", text);
    db.getExample(text).then((example) => {
      res.send("Check the console for data!");
    });
  });

  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    db.updateExample(id, text).then((example) => {
      res.send("Check the console for data!");
    });
  });

  router.delete("/:id", (request, response) => {
    const { id } = request.params;
    db.deleteExample(id).then(() => {
      setTimeout(() => {
        response.status(204).json({});
      }, 1000);
    });
  });

  return router;
};
