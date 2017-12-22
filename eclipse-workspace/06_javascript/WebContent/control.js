function comprobar(){
var primo = window.prompt("dime numero primo del 1 al 10");
if(primo==1 || primo==2 || primo==3|| primo==5|| primo==7) 
{
	window.alert("lo has conseguido");
}
}

function viajar(){
	var lugar = window.prompt("¿donde quieres ir?");
	if (lugar=="Roma" ||lugar=="roma" ) {
		window.alert("500");

		} 
	else if (lugar=="Paris"||lugar=="paris") {
			window.alert("450");

		} 
	else if (lugar=="Berlin") {
			window.alert("280");

		} 
	else {
			window.alert("abrir presupuestos");
		} 
	}