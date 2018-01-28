
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


for(i = 0; i < article_text.length; i++) {
	//Not needed and unnecessary:
	let p_list = article_text[i];
	console.log(p_list);
	//document.getElementsByClassName("text")[0].appendChild(x[i]);
	//stuff.appendChild(p_list);
	stuff.innerHTML += p_list.innerHTML;
	/*
	for(var i = 0; i <= x[i].children.length; i++){
		x[i].style.display = "inherit";
	}
	*/
	
}

main.innerHTML = article_text[2].innerHTML;

console.log(article_text[2].innerHTML);










