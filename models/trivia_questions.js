module.exports = function(sequelize, DataTypes) {
    var TriviaQuestions = sequelize.define("TriviaQuestions", {
      topic: {
        type: DataTypes.STRING
      }, 
      question: {
        type: DataTypes.STRING
      },
      optionA: {
        type: DataTypes.STRING
      },
      optionB: {
        type: DataTypes.STRING
      },
      optionC: {
        type: DataTypes.STRING
      },
      optionD: {
        type: DataTypes.STRING
      },
      correct_option: {
        type: DataTypes.STRING
      }
    }, {
      freezeTableName: true
    }
    
    );
    return TriviaQuestions;
  };