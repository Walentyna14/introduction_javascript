var Select = document.getElementsByTagName('select');
var elem = document.getElementById('container');

function styles(){
	var style = this.id;
	var value = this.value;
	
	elem.style[style] = value;
}

for( var i = 0; i < Select.length; i++ ){
	Select[i].addEventListener( 'change', styles );
}