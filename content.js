

console.log("Test")

var x = document.getElementsByTagName('p');
console.log("p items: ", x);

for(i = 0; i < x.length; i++){
	let thing = x[i];
	console.log(thing);
	if(thing.innerHTML) {
		x[i].innerHTML = "test";
	}
}

		


