create Table responses
(
Id serial primary key,
Blog_id int references blog_posts(id),
User_id int references users(id),
Content varchar(20000),
Claps int,
Time_stamped timestamp not null default current_timestamp
)


