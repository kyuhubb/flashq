document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='correct' src='sfx/correct.mp3'></audio>"+
"<audio id='wrong' src='sfx/wrong.mp3'></audio>"+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<div id='progressBar'><div id='progress'></div></div>"+
"<div id='won'><span id='wonText'>Baies en Vrac</span></div>"+
"<div id='question'>n/a</div>"+
"<div id='answerbox'><input id='answer' autofocus></input></div>"+
"<div id='goodAnswer'>n/a</div>"+
"<div id='combo'>combo : <span id='ncombo'>0</span><br>multiplicateur : x<span id='multiple'>1</span></div>";

let quest = [];
let questions = [];
let ans = [];
let answers = [];
var deck = document.createElement('script');
deck.src = getCookie('deck');

document.getElementById('bg').style.backgroundImage = 'url("img/forest.jpg")';
let combo = 0;
let multiplicateur = 1;
let progression = 0;
let nQuestion = 0;
let wrongA = [];
let wrongQ = [];

document.getElementById('answer').addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
  	checkAnswer();
  	document.getElementById('answer').value = "";
  }
});
document.getElementsByTagName('body')[0].appendChild(deck);