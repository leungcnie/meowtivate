module.exports = (router, db) => {
  //get actions
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getActions(user_id)
      .then((data) => {
        res.json(data);
        // console.log(request.body.habits);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // update todo & habit name
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { action_name } = req.body;
    db.updateName(id, action_name).then((example) => {
      res.status(204).send("Successfully update name!");
    });
  });

  // update todo & habit states
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { is_completed } = req.body;
    db.updateState(id, is_completed).then((example) => {
      res.status(204).send("Successfully updateState!");
    });
  });

  // deleteAction
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.deleteAction(id).then(() => {
      setTimeout(() => {
        res.status(204).send("Successfully delete!");
      }, 1000);
    });
  });
  return router;
};
