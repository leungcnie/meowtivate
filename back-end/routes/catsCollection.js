module.exports = (router, db) => {
  // Get collections with id
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getCatsCollections(user_id).then((data) => {
      console.log("cannot get the correct", data);
    });
    res.send("we got collection");
  });

  return router;
};
