module.exports = (router, db) => {
  // Get example with id
  router.get("/:id", (req, res) => {
    const exampleID = req.params.id;
    db.getExampleWithID(exampleID).then((example) => {
      console.log(example);
      console.log("can i get the example text:", example.text);
    });
    res.send("we got it boiz");
  });

  return router;
};
