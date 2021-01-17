/**
 * Get a single user from the database given their id.
 * @param {string} id
 * @return {Promise<{}>}
 */
const getCatsCollections = (db, id) => {
  return db
    .query(
      `SELECT cats.id, cat_name, image_url, description, date_unlocked
FROM cats 
JOIN user_unlocked_cats on cat_id = cats.id
JOIN users on users.id = user_id
WHERE id = $1`,
      [id]
    )
    .then((res) => res.row[0])
    .catch((err) => console.error("query getCatsCollections error", err.stack));
};
exports.getCatsCollections = getCatsCollections;
