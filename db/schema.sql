DROP DATABASE IF EXISTS trivia;
CREATE database trivia;

USE trivia;

CREATE TABLE trivia_questions (
  topic VARCHAR(100) NOT NULL,
  question VARCHAR(100) NOT NULL,
  choice1 VARCHAR(100) NOT NULL,
  choice2 VARCHAR(100) NOT NULL,
  choice3 VARCHAR(100) NOT NULL,
  choice4 VARCHAR(100) NOT NULL,
  correct_choice VARCHAR(100) NOT NULL
);

CREATE TABLE highscores (
    id INT NOT NULL,
    player_topic VARCHAR(100) NOT NULL,
    player_name VARCHAR(100) NOT NULL,
    player_score VARCHAR(100) NOT NULL,
);
