INSERT INTO actions (user_id, category_id, action_name, date_created, is_completed)
VALUES (1, 1, 'Buy groceries', CURRENT_DATE, true),
(1, 1, 'Vacuum the house', CURRENT_DATE, false),
(1, 1, 'Go for a walk', CURRENT_DATE, false),
(1, 2, 'Drink a liter of water', CURRENT_DATE, false),
(1, 2, '10 mins of exercise', CURRENT_DATE, true);

INSERT INTO actions (user_id, category_id, action_name, date_created, is_completed)
VALUES (2, 2, 'Drink a liter of water', CURRENT_DATE, false),
(2, 2, '15 mins of exercise', CURRENT_DATE, false);

INSERT INTO actions (user_id, category_id, action_name, date_created, is_completed)
VALUES (3, 2, 'Drink a liter of water', CURRENT_DATE, false),
(3, 2, '15 mins of exercise', CURRENT_DATE, true);