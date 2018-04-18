delete from responses where blog_id = $1;
delete from blog_posts where id = $1;