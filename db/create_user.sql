INSERT INTO users
(auth_id,username,profile_image)
VALUES
($1, $2, $3)
RETURNING *;