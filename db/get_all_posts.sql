select *,blog_posts.id as blog_id from blog_posts
join users on users.id= blog_posts.user_id
order by time_stamped desc;