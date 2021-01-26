// Routes for 'pots' table

module.exports = (router, db) => {
  // Get all pots
  router.get("/", (req, res) => {
    // const user_id = req.params.id;
    db.getAllPots()
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // purchase pot
  // router.post("/", (req, res) => {
  //   const { user_id, pot_id } = req.body;
  //   // console.log("req.body in POST /todos", req.body);

  //   db.purchasePot(user_id, pot_id)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // Get all pots user HASN'T bought
  // router.get('/available', (req, res) => {
  //   db.getAvailablePots(1)
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // })

  return router;
};