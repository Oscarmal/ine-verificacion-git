<?php /*O3M*/
/**
* Descripcion:	Parsea un archivo html/tpl y reemplaza variables
* Creación:		2014-06-11
* @author 		Oscar Maldonado - O3M
*
*/
function get_template($file='') {
	$template = file_get_contents($file);
	return $template;
}
function render_dinamic_data($html, $data) {
	foreach ($data as $clave=>$valor) {
		$html = str_replace('{'.$clave.'}', $valor, $html);
	}
	return $html;
}
function html($vista, $data=array()) {
	$html = get_template($vista);
	if(count($data[cabecera])){
		$html = render_dinamic_data($html, $data[cabecera]);
	}
	if(count($data[contenido])){
		$html = render_dinamic_data($html, $data[contenido]);
	}
	if(count($data[menu])){
		$html = render_dinamic_data($html, $data[menu]);
	}
	if(count($data[submenu])){
		$html = render_dinamic_data($html, $data[submenu]);
	}
	print $html;
}
/*O3M*/
?>