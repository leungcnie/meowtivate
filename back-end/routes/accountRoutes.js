module.exports = (router, db) => {
  /*--------- get user accounts -----------*/
  router.get("/login/:id/:username", (req, res) => {
    req.session.id = req.params.id;
    const { username } = req.params;
    db.getUser(username)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /*--------- get user accounts -----------*/
  router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.getUserId(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /*--------- register user accounts -----------*/

  router.post("/register", (req, res) => {
    const { username, email, name, password } = req.body;

    db.registerUser(username, email, name, password)
      .then((data) => {
        res.send("Successfully register");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  /*--------- update accounts -----------*/
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { email, username, password } = req.body;
    db.updateAccount(id, id, email, username, password).then((example) => {
      res.status(204).send("Successfully update account!");
    });
  });

  return router;
};
