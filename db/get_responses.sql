select * from responses
join users on users.id = responses.user_id
where blog_id = $1