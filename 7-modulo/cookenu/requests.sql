CREATE TABLE
    cookenu_users (
        id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    cookenu_recipes (
        id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(8.191) NOT NULL,
        user_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(user_id) REFERENCES cookenu_users(id),
        creation_date DATE NOT NULL
    );

CREATE TABLE
    cookenu_followers (
        id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
        follower_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(follower_id) REFERENCES cookenu_users(id),
        followed_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(followed_id) REFERENCES cookenu_users(id)
    );

ALTER TABLE
    cookenu_recipes CHANGE description description VARCHAR(8191) NOT NULL;
ALTER TABLE
  cookenu_users ADD role ENUM("normal", "admin") DEFAULT "normal"
;
DESCRIBE cookenu_users;

DESCRIBE cookenu_recipes;

DESCRIBE cookenu_followers;

SELECT * FROM cookenu_users;


SELECT * FROM cookenu_recipes;

SELECT * FROM cookenu_followers;

SELECT *
FROM cookenu_followers
    JOIN cookenu_users ON cookenu_followers.followed_id = cookenu_users.id --
    JOIN cookenu_recipes ON cookenu_recipes.user_id = cookenu_recipes.user_id
WHERE
    cookenu_followers.follower_id = "7d392a57-3f9b-4b6c-8e46-b9d7c2238797";

SELECT * 
FROM cookenu_recipes
    JOIN cookenu_followers ON cookenu_recipes.user_id = cookenu_recipes.user_id
