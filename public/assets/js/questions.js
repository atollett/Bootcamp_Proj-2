var mysql = require("mysql");
var questions = [];
var connection;
var topic; //get from somewhere

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWRD,
    database: "trivia"
  });
} 

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  //pickQuestions(topic);
});

function pickQuestions(topic) {
  connection.query("SELECT * FROM questions WHERE topic = '" + topic + "' ORDER BY RAND() LIMIT 10", function(err, results){
    if (err) {
      throw err;
    }
    populateQuestions(results);
  });
}

function populateQuestions(results) {
  for (var i = 0; i < results.length; i++) {
    var question = {};
    question.topic = results[i].topic;
    question.question = results[i].question;
    question.A = results[i].optionA;
    question.B = results[i].optionB;
    question.C = results[i].optionC;
    question.D = results[i].optionD;
    question.correct = results[i].correct_option;
    questions.push(question);
  }
  if (questions.length === 10) {
    connection.end();
  }
}

module.exports = pickQuestions;
// module.exports = connection;