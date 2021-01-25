module.exports = (router, db) => {

  // Get all pots user owns
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

  // Add new row in user_pots
  // User buys a new pot
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

  // Get default pot image URL for user
  router.get("/:id/default", (req, res) => {
    const user_id = req.params.id;
    db.getUserDefault(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // Update pot is_default value
  router.put("/:id", (req, res) => {
    const user_id = req.params.id;
    const { pot_id, is_default } = req.body;
    db.updateInventory(user_id, pot_id, is_default)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // router.get("/:id", (req, res) => {
  //   const user_id = req.params.id;
  //   db.getDefaultPot(user_id)
  //     .then((data) => {
  //       res.json(data);
  //       // console.log("cannot get the correct", data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // router.post("/bought", (req, res) => {
  //   const { user_id, pot_id } = req.body;
  //   // console.log("req.body in POST /todos", req.body);

  //   db.changeDefaultPot(user_id, pot_id)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });
  return router;
};