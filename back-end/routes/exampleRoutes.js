module.exports = (router, db) => {
  // Get example with id
  router.get("/:id", (req, res) => {
    const exampleID = req.params.id;
    db.getExampleWithID(exampleID).then((example) => {
      console.log("example from exampleRoutes.js:", example);
      console.log("example.text:", example.text);
    });
    res.send("Check the console for data!");
  });

  return router;
};
