
//console.log(Math.random());

//round a number

//Math.round(Math.random()); //round the result

//how do we incease the default 0 - 1 randomness 

//console.log(Math.round(    Math.random() * 10)   );
//Math.floor(  Math.random() * 10);

//give the go button event binding
var go = document.getElementById("go");
go.addEventListener("click", onClick, false);

function onClick(evt){
	console.log("you have clicked...");
	//remove the click event....
	//go.removeEventListener("click", onClick, false);
	initialize();
	runAttempt1();
}

function initialize(){
	
}
function runAttempt1(){
	TweenMax.to("#attempt1Number", 5, {onUpdate:generateNumber1});
}

function runAttempt2(){
	
}
function runAttempt3(){
	
}

function calculateWin(){
	
}

function generateNumber1(){
	//create a ref
	var attempt1Number = document.getElementById("attempt1Number");
	var num = Math.round(Math.random * 10);
	attempt1Number.textContent = num;
}

function generateNumber2(){
	
}
function generateNumber3(){
	
}




