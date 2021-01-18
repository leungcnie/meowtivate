SELECT actions.id, user_id, action_name, date_created, is_completed
FROM actions 
JOIN categories on category_id = categories.id
WHERE categories.id = 2 and user_id =1