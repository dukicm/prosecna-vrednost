function srednjaVrednost(){
	var rez = 0;

	for (var i = 0; i < arguments.length; i++) {
		rez += arguments[i]; // da li ovo znaci sledece: u varijablu rez mi dodaj index od arguments i saberi sa sledecim indexom??
	};

	return rez/arguments.length;
}


var g = srednjaVrednost(5, 3, 5, 5, 4, 2, 3);
var bb = document.getElementById('box');
bb.innerHTML = g;


