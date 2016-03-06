
//create an array
var imageList = new Array;
// imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
// imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
// imageList[2] = "images/drawing/thumbs/artwork_3.jpg";

//create an array dynamically

//make sure a variable has been declared, but no value set
var output = "";
//this for loop builds the array
for (var i = 0; i < 25; i++ ){
	imageList[i] = "images/drawing/thumbs/artwork_" + (i + 1) + ".jpg";
	//output += '<img src="' + imageList[i] + '" width="150" height="100" />';
}

imageList[0] = null;

imageList[5] = null;

imageList[10] = null;
imageList[11] = null;

//this for loop displays the images and checks for null values
for (var i = 0; i < imageList.length; i++ ){
	//check for null value first
	if(imageList[i] != null){
		output += '<img src="' + imageList[i] + '" width="150" height="100" />';
	}else{
		output += '<img src="images/placeholder.jpg" width="150" height="100" />';
	}
	

}



//print output to the screen
var drawingDiv = document.getElementById("drawing");
drawingDiv.innerHTML = output; 
