module.exports = (router, db) => {
  // Get all actions
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getActions(user_id)
      .then(data => {
        res.json(data);
        // console.log(request.body.habits);
        // console.log("cannot get the correct", data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // Update an action's name and is_completed value
  router.put("/:id", (req, res) => {
    const { id, action_name, is_completed } = req.body;
    db.updateAction(id, action_name, is_completed)
      .then((updatedAction) => {
        res.status(200).send("Successfully update action!");
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // Delete an action
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
