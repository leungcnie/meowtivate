module.exports = (router, db) => {
  // Get collections with id
  router.get("/", (req, res) => {
    db.getAllCats([])
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Get collections with id
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getCatsCollections(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
