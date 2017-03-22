var Select = document.getElementsByTagName('select');
var elem = document.getElementById('container');
var change = document.getElementById('change');

function styles(event){
	var style = event.target.id;
	var value = event.target.value;
	elem.style[style] = value;
	event.stopPropagation();
}

change.addEventListener( 'change', styles , true);
