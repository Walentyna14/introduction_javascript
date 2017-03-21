var Select = document.getElementsByTagName('select');
var elem = document.getElementById('container');
var change = document.getElementById('change');

function styles(event){
	for( var i = 0; i < Select.length; i++ ){
		var style = Select[i].id;
		var value = Select[i].value;
		elem.style[style] = value;
	}
	event.stopPropagation();
}

change.addEventListener( 'change', styles , true);
