module.exports = function(sequelize, DataTypes) {
    var Trivia = sequelize.define("Trivia", {
      topic: DataTypes.STRING,
      question: DataTypes.STRING,
      optionA: DataTypes.STRING,
      optionB: DataTypes.STRING,
      optionC: DataTypes.STRING,
      optionD: DataTypes.STRING,
      correct_option: DataTypes.STRING
    });
    return Trivia;
  };