/*O3M*/
/*
* Libreria de funciones Javascript
*
*/
// jq = jQuery.noConflict();
$(document).ready(function(){
	$("input:text:visible:first").focus();
});

function enter(e, id_input) {
// Detecta cuando se presina la tecla enter y efectua el evento click en el input deseado
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13){
  		$('#'+id_input).click();
  }
}

/*O3M*/

