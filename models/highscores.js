module.exports = function(sequelize, DataTypes) {
    var Highscores = sequelize.define("Highscores", {
      topic: DataTypes.STRING,
      player_name: DataTypes.STRING,
      player_score: DataTypes.STRING
    });
    return Highscores;
  };