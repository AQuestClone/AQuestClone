create Table blog_posts
(
Id serial primary key,
User_id int references users(id),
TItle varchar(100),
Content varchar(20000),
Image varchar(100),
Claps int,
Time_stamped timestamp not null default current_timestamp
)