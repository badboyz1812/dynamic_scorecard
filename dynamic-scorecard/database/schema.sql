
CREATE TABLE api_scoredata (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    category NVARCHAR(50) NOT NULL,
    score FLOAT NOT NULL,
    created_at DATETIME NOT NULL
);
USE scoreboard_db;  -- Replace with your actual database name

USE scoreboard_db;
DROP TABLE api_scoredata;
