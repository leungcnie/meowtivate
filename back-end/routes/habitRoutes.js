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

  router.post("/:id", (req, res) => {
    const { action_name, is_completed } = req.body;

    db.createHabit(action_name, is_completed)
      .then((data) => {
        res.json(data);
        // console.log(request.body.habits);
        // console.log("cannot get the correct", data);
      })
      .catch((error) => console.log(error));
  });

  // router.put("/:id", (request, response) => {
  //   const { student, interviewer } = request.body.interview;

  //   db.query(
  //     `
  //     INSERT INTO actions (student, interviewer_id, appointment_id) VALUES ($1::text, $2::integer, $3::integer)
  //     ON CONFLICT (appointment_id) DO
  //     UPDATE SET student = $1::text, interviewer_id = $2::integer
  //   `,
  //     [student, interviewer, Number(request.params.id)]
  //   )
  //     .then(() => {
  //       setTimeout(() => {
  //         response.status(204).json({});
  //         updateAppointment(Number(request.params.id), request.body.interview);
  //       }, 1000);
  //     })
  //     .catch((error) => console.log(error));
  // });

  // router.delete("/appointments/:id", (request, response) => {
  //   if (process.env.TEST_ERROR) {
  //     setTimeout(() => response.status(500).json({}), 1000);
  //     return;
  //   }

  //   db.query(`DELETE FROM interviews WHERE appointment_id = $1::integer`, [
  //     request.params.id,
  //   ]).then(() => {
  //     setTimeout(() => {
  //       response.status(204).json({});
  //       updateAppointment(Number(request.params.id), null);
  //     }, 1000);
  //   });
  // });

  return router;
};
