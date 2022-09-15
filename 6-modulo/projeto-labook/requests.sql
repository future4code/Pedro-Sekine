CREATE TABLE
    labook_connections (
        id VARCHAR(255) UNIQUE PRIMARY KEY NOT NULL,
        user_id_one VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id_one) REFERENCES labook_users(id),
        user_id_two VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id_two) REFERENCES labook_users(id)
    );

DESCRIBE labook_posts;

DESCRIBE labook_users;

DESCRIBE labook_connections;

SELECT * FROM labook_users;

SELECT * FROM labook_posts;

SELECT * FROM labook_connections;

SELECT *
FROM labook_posts
    LEFT JOIN labook_connections ON (
        labook_connections.user_id_one = "670b5736-1dcb-4865-802a-292b7b5fcf76" OR labook_connections.user_id_two = "670b5736-1dcb-4865-802a-292b7b5fcf76"
    );

SELECT *
FROM labook_posts
WHERE
    labook_posts.author_id = labook_connections.user_id_one
    OR labook_posts.author_id = labook_connections.user_id_two
    INNER JOIN labook_connections ON labook_connections.user_id_one = labook_posts.author_id;

SELECT *
FROM labook_posts
INNER JOIN labook_connections ON (labook_posts.author_id = labook_connections.user_id_one 
OR labook_posts.author_id = labook_connections.user_id_two)
WHERE (labook_connections.user_id_one = '670b5736-1dcb-4865-802a-292b7b5fcf76' OR labook_connections.user_id_two = '670b5736-1dcb-4865-802a-292b7b5fcf76')