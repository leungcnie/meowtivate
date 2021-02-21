module.exports = (router, db) => {

  // Get all pots user owns
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getUserInventory(user_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Add new row in user_pots bridge table when user buys pot
  router.post("/:id", (req, res) => {
    const user_id = req.params.id;
    const { pot_id } = req.body;
    db.addInventory(user_id, pot_id)
      .then((data) => {
        console.log("new add inventory", data);
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  })

  // Get default pot image data for user
  router.get("/default/:id", (req, res) => {
    const user_id = req.params.id;
    db.getUserDefault(user_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Update pot is_default value
  router.put("/:id", (req, res) => {
    const user_id = req.params.id;
    const { pot_id } = req.body;
    db.setDefault(user_id, pot_id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};