module.exports = (router, db) => {

  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getUserInventory(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getDefaultPot(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/bought", (req, res) => {
    const { user_id, pot_id } = req.body;
    // console.log("req.body in POST /todos", req.body);

    db.changeDefaultPot(user_id, pot_id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};