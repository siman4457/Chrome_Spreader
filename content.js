


var main = document.createElement("div");
main.className += "main";

var article = document.createElement("div");
article.className += "supporting";

var stuff = document.createElement("div");
stuff.className += "text";


document.getElementsByTagName("body")[0].appendChild(main);
document.getElementsByTagName("body")[0].appendChild(article);
article.appendChild(stuff);





var x = document.getElementsByTagName('p');
var bod = document.getElementsByTagName('body');
var entire = document.getElementsByTagName('html');

for(i = 0; i <= x.length; i++){
	let thing = x[i];
	console.log(thing);
	document.getElementsByClassName("text")[0].appendChild(x[i]);
}




