-- Init PostgreSQL Database 12-10-2024
--------------
--LIBRAIRIES--
--------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


------------------
-- USERS TABLES -- 
------------------

--user table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password text NOT NULL,
    active BOOLEAN DEFAULT FALSE,
    activation_token UUID DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--forgot_password table
CREATE TABLE IF NOT EXISTS forgot_password (
    id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    token UUID DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

----------
-- TAGS -- 
----------

--tags table
CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------
-- PARAM GENERICS -- 
--------------------

--param generics table
CREATE TABLE IF NOT EXISTS param_generics (
    id SERIAL PRIMARY KEY,
    param_key VARCHAR(50) NOT NULL,
    code VARCHAR(50) NOT NULL,
    display VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-------------
-- RECIPES --
-------------

--recipes table
CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(250) NOT NULL,
    duration INT NOT NULL,
    redactor_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (redactor_id) REFERENCES users(id)
);

--recipe_tags table
CREATE TABLE IF NOT EXISTS recipe_tags (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    tag_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);

--recipe_photos table
CREATE TABLE IF NOT EXISTS recipe_photos (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    url VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

--recipe_ingredients table
CREATE TABLE IF NOT EXISTS recipe_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity INT NOT NULL,
    unit_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES param_generics(id),
    FOREIGN KEY (unit_id) REFERENCES param_generics(id)
);

--recipe_steps table
CREATE TABLE IF NOT EXISTS recipe_steps (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    step_index INT NOT NULL,
    description VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

--recipe_steps_photos table
CREATE TABLE IF NOT EXISTS recipe_steps_photos (
    id SERIAL PRIMARY KEY,
    recipe_step_id INT NOT NULL,
    url VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_step_id) REFERENCES recipe_steps(id)
);

--recipe_comments table
CREATE TABLE IF NOT EXISTS recipe_comments (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    comment VARCHAR(250) NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

--recipe_likes table
CREATE TABLE IF NOT EXISTS recipe_likes (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

--recipe_user_photos table
CREATE TABLE IF NOT EXISTS recipe_user_photos (
    id SERIAL PRIMARY KEY,
    recipe_id INT NOT NULL,
    user_id INT NOT NULL,
    url VARCHAR(250) NOT NULL,
    comment VARCHAR(250) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-----------------
-- INGREDIENTS --
-----------------

--ingredients table
CREATE TABLE IF NOT EXISTS ingredients (
    id SERIAL PRIMARY KEY,
    ingredient_id INT NOT NULL,
    photo_url VARCHAR(250) NOT NULL,
    default_unit_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ingredient_id) REFERENCES param_generics(id),
    FOREIGN KEY (default_unit_id) REFERENCES param_generics(id)
);