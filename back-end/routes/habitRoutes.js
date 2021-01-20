module.exports = (router, db) => {
  // Get collections with id
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getHabits(user_id)
      .then((data) => {
        res.json(data);
        // console.log(request.body.habits);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const { action_name } = req.body;

    db.createHabit(action_name)
      .then((data) => {
        res.send("Check the console for data!");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // update todo & habit states
  router.put("/:id", (req, res) => {
    const { id, is_completed } = req.body;
    db.updateState(id, is_completed).then((example) => {
      res.status(204).send("Successfully updateState!");
    });
  });

  return router;
};
