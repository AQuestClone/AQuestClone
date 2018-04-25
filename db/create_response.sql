insert into responses(blog_id, user_id, content, claps)
values($1, $2, $3, $4);
select * from responses
where blog_id=$1
order by time_stamped desc;
