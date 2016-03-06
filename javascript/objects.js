//so far we have covered the following datatypes...
//numbers, strings, arrays, booleans (true or false)
/* 
objects are great for complex data represented by one variable
say for a student object...

STUDENT (object)
	properties:
	age 46
	born 1970-01-01
	finalGrade A
	phone 555-555-5555
	
	method: contact student 
 */
//create an empty object...
// var student = {};
// //reference the object and populate
// student = {
	// //all the properties and methods in an object are what are know as..
	// //object members
	// firstName : "Glenn",
	// lastName : "Kouhia",
	// finalGrade : "F",
	// bioPic : "images/drawing/thumbs/artwork_13.jpg",
// 	
	// checkGrade : function(){
		// //alert("yes this is a method of the student object");
		// if(this.finalGrade === "A")
		// {
			// alert("good job " + this.firstName + ", keep it up");
		// }else if(this.finalGrade === "B" || this.finalGrade === "C")
		// {
			// alert("doing ok " + this.firstName);
		// }else if(this.finalGrade === "D" || this.finalGrade == "F")
		// {
			// //tell the student
			// //we can reference the method inside of this object
			// this.contactStudent();
		// }
	// },
// 	
	// contactStudent : function(){
		// alert("calling...   " + this.firstName + "...");
	// }
// 	
// };


//console.log(student);//the entire object
//use dot notation to access object properties
//console.log("the first name is currently... " + student.firstName);//outputs Glenn
//changing object properties
//student.firstName = "Bill";

//console.log("the student name is now... " + student.firstName);







var imageListA = {
	image1 : ["Four Kids", "images/drawing/thumbs/artwork_1.jpg"],
	image2 : ["Lydia", "images/drawing/thumbs/artwork_2.jpg"],
	image3 : ["TRansformers", "images/drawing/thumbs/artwork_3.jpg"]

};

// 
// imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
// imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
// imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
// imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
// imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
// imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
// imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
// imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
// imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
// imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
// imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
// imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
// imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
// imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
// imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
// imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
// imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = [];
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = [];
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	output += '<div class="thumbs_block">  ';
	
	
	
	for(i in imageListA)
	{
		//concatenation assignment operator..
		output += '<div class="image">';
		output += "<p>";
		output += imageListA[i][0];
		output += "</p>";
		output += '<img src="' + imageListA[i][1] + '" />';
		output += '</div>'; 
	}
	
	
	output += '</div>';
	output += '<div class="thumbs_block">  ';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
	output += '</div>';
	output += '<div class="thumbs_block">  ';
// 	
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
	output += '</div>';
	
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}

window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};
