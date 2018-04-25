insert into blog_posts(user_id, title, content, image, claps)
values($1, $2, $3, $4, $5);
select * from blog_posts
where title = $2;
