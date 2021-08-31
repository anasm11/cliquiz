var rls=require('readline-sync')
var username=rls.question('Enter your name:')
console.log('Hi ',username,', Welcome to the quiz.')

var score =0

var kohli={
  name:"kohli",
  role:"batsman",
  dominant_hand:"right",
  rating:844,
  ranking:2
}

var rohit={
  name:"rohit",
  role:"batsman",
  dominant_hand:"right",
  rating:813,
  ranking:3
}

var bumrah={
  name:"bumrah",
  role:"bowler",
  dominant_hand:"right",
  rating:679,
  ranking:7
}

var jadeja={
  name:"jadeja",
  role:"all-rounder",
  dominant_hand:"left",
  rating:238,
  ranking:9
}

var players=[kohli,rohit,bumrah,jadeja];

var questions=[
  {
    question:'Who has the highest ranking?\na.Kohli\nb.Rohit\nc.Bumrah\nd.Jadeja\n',
    answer:'a'
  },
  {
    question:'Who is the allrounder in among the four?\na.Kohli\nb.Rohit\nc.Bumrah\nd.Jadeja\n',
    answer:'d'
  },
  {
    question:'The dominant hand of jadeja is ____\n',
    answer:jadeja.dominant_hand
  },
  {
    question:'What is the ranking of rohit?\n',
    answer:rohit.ranking
  },
  {
    question:'What is the role of bumrah (bowler/batsman)?\n',
    answer:bumrah.role
  }
]


function func(q,a){
  var userAns=rls.question(q);
  if(userAns==a){
    score++;
    console.log('Correct!')
  }
  else console.log('wrong')

  console.log('Current score is ',score);
}

for(var i=0;i<questions.length;i++){
  func(questions[i].question,questions[i].answer);
  console.log("**************")
}
console.log('Your total score is',score,'!!!');