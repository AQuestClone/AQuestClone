insert into responses(blog_id, user_id, content, claps)
values($1, $2, $3, $4);
select *, responses.id as res_id from responses
join users on users.id = responses.user_id
where blog_id = $1
order by time_stamped desc;
