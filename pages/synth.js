document.getElementsByTagName('body')[0].innerHTML +=""+
"<audio id='prize' src='sfx/prize.mp3'></audio>"+
"<div id='youMade'><span id='potionName'>Nom de potion</span><p id='price'><span id='nprice'>0</span> $</p></div>"+
"<div id='box2'>"+
"<h1>Catalogue</h1>"+
"<div id='catalog'>"+
	"<div class='bar'><p>Baies en vrac</p><p>requis : <br>exploration</p><p>possédé : <span id='baie1'></span></p><img src='img/ingredients/bagberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button></div>"+
	"<div class='bar'><p>Baies délicieuses</p><p>requis : <br>2x baies en vrac</p><p>possédé : <span id='baie2'></span></p><img src='img/ingredients/bagberry2.png' width='50px'><br><br><button onclick='synth(\"baie2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Baies parfaites</p><p>requis : <br>2x baie délicieuses</p><p>possédé : <span id='baie3'></span></p><img src='img/ingredients/berry.png' width='50px'><br><br><button onclick='synth(\"baie3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Jus de baie </p><p>requis : <br>2x baies en vrac</p><p>valeur : 10$ ~ 25$</p><img src='img/goods/red3.png' width='50px'><br><br><button onclick='synth(\"red3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion orange</p><p>requis : <br>2x baies délicieuses</p><p>valeur : 50$ ~ 75$</p><img src='img/goods/red2.png' width='50px'><br><br><button onclick='synth(\"red2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion citron</p><p>requis : <br>2x baies parfaites</p><p>valeur : 115$ ~ 225$</p><img src='img/goods/red1.png' width='50px'><br><br><button onclick='synth(\"red1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Myrtilles en vrac</p><p>requis : <br>exploration</p><p>possédé : <span id='blueberry1'></span></p><img src='img/ingredients/bagblueberry.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button></div>"+
	"<div class='bar'><p>Myrtilles envoûtantes</p><p>requis : <br>2x myrtilles impures</p><p>possédé : <span id='blueberry2'></span></p><img src='img/ingredients/bagblueberry2.png' width='50px'><br><br><button onclick='synth(\"blueberry2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Myrtilles parfaites</p><p>requis : <br>2x myrtilles envoûtantes</p><p>possédé : <span id='blueberry3'></span></p><img src='img/ingredients/blueberry.png' width='50px'><br><br><button onclick='synth(\"blueberry3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion bleue </p><p>requis : <br>2x myrtilles en vrac</p><p>valeur : 33$ ~ 99$</p><img src='img/goods/blue3.png' width='50px'><br><br><button onclick='synth(\"blue3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion ciel</p><p>requis : <br>2x myrtilles envoûtantes</p><p>valeur : 150$ ~ 300$</p><img src='img/goods/blue2.png' width='50px'><br><br><button onclick='synth(\"blue2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion claire</p><p>requis : <br>2x myrtilles parfaites</p><p>valeur : 500$ ~ 1000$</p><img src='img/goods/blue1.png' width='50px'><br><br><button onclick='synth(\"blue1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Raisins en vrac</p><p>requis : <br>exploration</p><p>possédé : <span id='raisin1'></span></p><img src='img/ingredients/bagraisin.png' width='50px'><br><br><button onclick='goto(\"gather\")'>récolter</button></div>"+
	"<div class='bar'><p>Raisins savoureux</p><p>requis : <br>2x raisins en vrac</p><p>possédé : <span id='raisin2'></span></p><img src='img/ingredients/bagraisin2.png' width='50px'><br><br><button onclick='synth(\"raisin2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Raisins parfaits</p><p>requis : <br>2x raisins savoureux</p><p>possédé : <span id='raisin3'></span></p><img src='img/ingredients/raisin.png' width='50px'><br><br><button onclick='synth(\"raisin3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion aubergine </p><p>requis : <br>2x raisins en vrac</p><p>valeur : 125$ ~ 325$</p><img src='img/goods/purple3.png' width='50px'><br><br><button onclick='synth(\"purple3\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion lavande</p><p>requis : <br>2x raisins savoureux</p><p>valeur : 333$ ~ 600$</p><img src='img/goods/purple2.png' width='50px'><br><br><button onclick='synth(\"purple2\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion bonbon</p><p>requis : <br>2x raisins parfaits</p><p>valeur : 1 250$ ~ 2 500$</p><img src='img/goods/purple1.png' width='50px'><br><br><button onclick='synth(\"purple1\")'>synthétiser</button></div>"+
	"<div class='bar'><p>Potion cramasoie</p><p>requis : <br>2x baies parfaites<br>2x myrtilles parfaites<br>2x raisins parfaits</p><p>valeur : 10 000$ ~ 25 000$</p><img src='img/goods/wine.png' width='50px'><br><br><button onclick='synth(\"wine\")'>synthétiser</button></div>"+
"</div>"+
"</div>";
showPossess();