<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php /*O3M*/
/**
* Descripcion:	Manejador de acciones
* Creación:		2014-06-11
* @author 		Oscar Maldonado - O3M
*
*/
#Acciones
$action = strtoupper($ins[a]);
$actionList = array(
		 INICIO => 'modulo/inicio.php'
		,CONTENIDO => 'modulo/inicio.php'
		,SALIR => 'index.php?e=1'
		,FRAME => 'modulo/index.php'
		,HEADER => 'modulo/html_header.php'
		,FOOTER => 'modulo/html_footer.php'
		,MENU => 'modulo/menutop.php'
		,ENUMERACION => 'modulo/enumeracion/'
			,REP_INICIO_ENUMERA => 'modulo/enumeracion/rep_inicio_enumera.php'
		// ,COBERTURA => 'modulo/cobertura/'
		// ,ACTUALIZACION => 'modulo/actualizacion/'
		);

if(array_key_exists($action,$actionList)){
	header('location: '.$Raiz[url].$actionList[$action]);
}else{
	$params = array(
		 MORE => '<link href="'.$Path[css].'estilo_contenido.css" rel="stylesheet" type="text/css">'
		,MENSAJE => "Acción no disponible.", ACCION => $action
		);
	print(errorHtml($params));
}
/*O3M*/
?>