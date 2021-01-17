-- retrieve user cats collection
SELECT cats.id, cat_name, image_url, description, date_unlocked
FROM cats 
JOIN user_unlocked_cats on cat_id = cats.id
JOIN users on users.id = user_id
WHERE users.id = 1
