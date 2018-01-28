/*
var file = location.pathname.split( "/" ).pop();
var link = document.createElement( "link" );
link.href = "styles.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );
*/

var main = document.createElement("div");
main.className += "main";

var buttonT = document.createElement("div");
buttonT.className += "buttonT";



var buttonB = document.createElement("div");
buttonB.className += "buttonB";

var PlayPause = document.createElement("div");
PlayPause.className += "PlayPause";



var article = document.createElement("div");
article.className += "supporting";

var stuff = document.createElement("div");
stuff.className += "text";

var ticker = document.createElement("p");
ticker.id += "scrolltext"

document.getElementsByTagName("body")[0].appendChild(main);
document.getElementsByTagName("body")[0].appendChild(article);
document.getElementsByTagName("body")[0].appendChild(buttonT);
document.getElementsByTagName("body")[0].appendChild(buttonB);
document.getElementsByTagName("body")[0].appendChild(PlayPause);
main.appendChild(buttonT);
main.appendChild(buttonB);
main.appendChild(PlayPause);
article.appendChild(stuff);
main.appendChild(ticker);

buttonT.innerHTML = "Faster";
buttonB.innerHTML = "Slower";
PlayPause.innerHTML = "Play/Pause";



var article_text = document.getElementsByTagName('p');


/*
var bod = document.getElementsByTagName('body');
var entire = document.getElementsByTagName('html');
*/
var par_string = " ";
var Array_Words = [];


for(i = 0; i < article_text.length; i++) {
	//Not needed and unnecessary:
	var p_list = article_text[i];
	console.log(p_list);
	//document.getElementsByClassName("text")[0].appendChild(x[i]);
	//stuff.appendChild(p_list);
	stuff.innerHTML += p_list.innerHTML;
	/*
	for(var i = 0; i <= x[i].children.length; i++){
		x[i].style.display = "inherit";
	}
	*/


	par_string = p_list.innerHTML;
 	Array_Words.push(par_string.split(" "));

}




//var input_text = “This is a test. This should test the speed reader and display it”;


/*
for(i = 0; i < article_text.length; i++){
	var par_string = article_text[i].innerHTML;
	for (j = 0; j < par_string.length; j++){
 		Array_Words.push(par_string.split(" "));

	}
}
*/
console.log(Array_Words.length);

console.log(Array_Words);
/*
for (j = 1; j < Array_Words.length; j++){
  if(Array_Words[j].length < 1){
		console.log("Fail");
	}
	else{
		setTimeout(function() {
			try{
				console.log("Success!")
				main.innerHTML = Array_Words[j];
			}
			catch(err){
				console.log("Fail 2")
			}
		//location.reload();
		}, 2000);
		console.log(Array_Words[i][j]);
   }
	}
*/

// Function developed so that 'Scheduler' could be used.
/*
function printToScreen(){
	ticker.innerHTML = Array_Words[i][j];
			main.style.display = "none";
			main.style.display = "inherit";
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

*/
var inner =0;
var outer =0;


var Timer = setInterval(function(){
	if(outer >= Array_Words.length){
		// We're done
		clearInterval(Timer);
		return;
	}


	var currWordGroup = Array_Words[outer];
	if(inner < currWordGroup.length){ // Groups of words "p- tag groups"
		ticker.innerHTML = currWordGroup[inner];
		inner +=1
	} else {
		inner = 0;
		outer += 1;
	}

}, 200);




//window.onload = function()
//setTimeout(function() {
/*
	for(var i = 0; i < Array_Words.length; i++){

		for (var j = 0; j < Array_Words[i].length; j++){

  	if(Array_Words[i][j].length < 1){
		//console.log("yep");
		}
		else{


		setInterval(function() {
			//console.log("Success!");
		// Commented this out just for testing purposes:
			console.log("I: " + i  + "J :" + j);
			console.log(Array_Words[i][j]);
			ticker.innerHTML = Array_Words[i][j];
			//main.style.display = "none";
			//main.style.displau = "inherit";
			//console.log(typeof Array_Words[i][j]);
		//chrome.tabs.insertCSS(null, {file:"/styles.css", runAt: "document_start"});
			//location.reload();
			//window.width();
			//sleep(0);
			//window.clearInterval()
				//main.innerHTML = Array_Words[i][j];
				//console.log(typeof Array_Words[i][j]);

		//location.reload();
		}, 2000);
		//console.log(Array_Words[i][j]);
   }
	}
=======

>>>>>>> 8c594a06719b987bab36e09a517a7efd4896f759
}
//}



main.innerHTML = article_text[2].innerHTML;

<<<<<<< HEAD
//},100);
/*
for (var j = 1; j < Array_Words.length; j++){
  if(Array_Words[j].length < 1){
		continue;
	}
	else{
	setInterval(function() {
	main.innerHTML = Array_Words[j];
	}, 2000);

	console.log(Array_Words[j]);
   }
}
*/
//console.log(Array_Words);











console.log(article_text[2].innerHTML);
