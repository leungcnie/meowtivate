module.exports = (router, db) => {

  // Login with user id
  router.get('/login/:id', (req, res) => {
    req.session.email = req.params.id; // Set a cookie called "id"
    // res.redirect('/');
    res.send('Logged in! Check cookies in devtool Application tab');
  })

  // NOTE: we'll need front-end button to send GET request to 
  // /login/1 as we only have one user

  router.get('/logout', (req, res) => {
    req.session = null;
    // res.redirect('/');
    res.send('Logged out! Check cookies in devtool Application tab');
  })

  return router;
};