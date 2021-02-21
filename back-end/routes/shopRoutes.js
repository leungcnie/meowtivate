// Routes for 'pots' table

module.exports = (router, db) => {
  // Get all pots
  router.get("/", (req, res) => {
    db.getAllPots()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};