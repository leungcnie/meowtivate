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

  // Create new unlocked cat
  router.post("/unlocked", (req, res) => {
    const { cat_id, user_id } = req.body;
    db.addUnlockedCat(cat_id, user_id)
      .then((data) => {
        // Send the date
        console.log("add new unlock date?", data.date_unlocked);
        res.status(200).json(data.date_unlocked);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  })
  return router;
};
