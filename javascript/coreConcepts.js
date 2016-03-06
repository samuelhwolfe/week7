// this is a single line comment in javascript

/*BLOCK COMMENT - good for whole sections being turned off            */

//VARIABLES

//STRING type of data***************************************************
var userName = "jason"; //setting a variable

userName = "bob";//using a variable

// the = is the assignment operator

var firstName = "jason";
var lastName = "zeringue";
	
//Bad variable names
//var 1hi there = "something"

//USING SINGLE AND DOUBBLE QUOTE

var myComment = "who said this:";
var myQuote = '"all the world\'s a stage"';//single quotes print literal characters
//var myQuote = "all the world&copy;s a stage";
//console.log(myComment);//shows the value of myComment to the console, when we reload
//console.log(myQuote);

var message = firstName + " " + lastName;//joining two variables
//console.log(message);
//target and replace elements on the page....
var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

//NUMBER ***************************************************  (dont use quotes for numbers)
var level = 1;
var lives = 3;
var ssNumber = 2342232222;// this is integer
var cost = 1.50;//this is a float type number
var cost1 = "50";
var cost2 = 50; 
var total = Number(cost1) * cost2; //perform math by adding +
//console.log(total);

//console.log(level);
	
	
//**** ARRAY DATA TYPE ********************************
//create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

//update an element in the list
imageList[0] = "images/watercolor/thumbs/artwork_1.jpg";

//find the length of the array
//console.log(imageList.length);

imageList.push("images/oil/thumbs/artwork_8.jpg");//adds to the end of the list

//lets selectively remove any element we want...
//you can also store the splice to a var
var indexImage6 = imageList.splice(6,1);

//remove the last item in the list
//var endImage = imageList.pop();
var endImage = imageList.pop("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[0]);//update the src attribute of the image

//console.log(imageList.length);

//**** Boolean DATA TYPE ********************************
//truth or false, yes or no, 1 or 0
var oldEnough = false;
var hasContent = true;

var age = 20;
//**** ifthen statements (branching logic, application logic, business logic) ********************************
//check the age...

if(age <= 20){//less than or equal
	//too young
	oldEnough = false;
}else{
	oldEnough = true;
}

if (oldEnough == true){
	//== means is equal to
	// = mean gets set to
	//more code here
	console.log("you may go on the roller coaster");
}else{
	console.log("you may NNNOOOTTTT!!!! go on the roller coaster");
}

//**** Functions ********************************
//
function dynamicGreeting(){
	//create the built-in date object
	var now = new Date();
	var time = now.getHours();//extract the hours
	
	if(time < 12){
		alert("good morning");
		
	}
	if(time == 12){
		alert("time to eat lunch at luna park");
	}
	if(time > 12){
		alert("good evening, the time is..." + now.toLocaleString());
	}

}

//dynamicGreeting();

//**** javascript Objects ********************************

//spaces dont matter
//most common type of data are name / value pairs
//separate value with commas 
//can hold datatype of string, numbers, ojects, arrays, boolean or null
var mrLebowski = {
	ownsItemA	: "rug",
	ownsItemB	: "bowling Ball",
	drink		: "white Russian",
	goBowling	: function(){
		var bowlFrame = Math.round(Math.random() * 10);
		return 'you have knocked down...' + bowlFrame + ' pins';
	},
	friends		: ['Walter', 'Donny']
};

// JSON object
//they cannot have methods, mainly name value pairs
//needs to be double quotes to validate

// {
	// "ownsItemA"	: "rug",
	// "ownsItemB"	: "bowling Ball",
	// "drink"		: "white Russian",
	// "friends"	: "Walter', "Donny"]
// }













