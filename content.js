
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

var article = document.createElement("div");
article.className += "supporting";

var stuff = document.createElement("div");
stuff.className += "text";


document.getElementsByTagName("body")[0].appendChild(main);
document.getElementsByTagName("body")[0].appendChild(article);
article.appendChild(stuff);




var article_text = document.getElementsByTagName('p');


/*
var bod = document.getElementsByTagName('body');
var entire = document.getElementsByTagName('html');
*/

stuff.innerHTML += "<pre>";
for(i = 0; i < article_text.length; i++) {
	//Not needed and unnecessary:
	let p_list = article_text[i];
	console.log(p_list);
	//document.getElementsByClassName("text")[0].appendChild(x[i]);
	//stuff.appendChild(p_list);
	
	stuff.innerHTML += p_list.innerHTML;
	stuff.innerHTML += "\n";
	/*
	for(var i = 0; i <= x[i].children.length; i++){
		x[i].style.display = "inherit";
	}
	*/
	
}

stuff.innerHTML += "</pre>";

main.innerHTML = article_text[0].innerHTML;

console.log(article_text[2].innerHTML);

//var input_text = “This is a test. This should test the speed reader and display it”;

var Array_Words = [];

for(i = 0; i < article_text.length; i++){
	var par_string = article_text[i].innerHTML;
	for (j = 0; j < par_string.length; j++){
 		Array_Words.push(par_string.split(""));
	}
}


for (var j = 0; j < Array_Words.length; j++){
   console.log(Array_Words[j]);
   }
//console.log(Array_Words);










