DROP DATABASE IF EXISTS trivia;
CREATE database trivia;

USE trivia;

CREATE TABLE trivia_questions (
  topic VARCHAR(100) NOT NULL,
  question VARCHAR(100) NOT NULL,
  optionA VARCHAR(100) NOT NULL,
  optionB VARCHAR(100) NOT NULL,
  optionC VARCHAR(100) NOT NULL,
  optionD VARCHAR(100) NOT NULL,
  correct_option VARCHAR(100) NOT NULL
);

CREATE TABLE highscores (
    id INT NOT NULL,
    player_topic VARCHAR(100) NOT NULL,
    player_name VARCHAR(100) NOT NULL,
    player_score VARCHAR(100) NOT NULL
);
