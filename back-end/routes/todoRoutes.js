module.exports = (router, db) => {
  // Get collections with id
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getTodos(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // post new todo
  router.post("/", (req, res) => {
    const { action_name } = req.body;

    db.createTodo(action_name)
      .then((data) => {
        res.send("Check the console for data!");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
