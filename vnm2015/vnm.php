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
		 INICIO => 'index.php'
		,TEST => 'modulo/test.php'
		,SALIR => 'index.php?e=1'
		);
if(array_key_exists($action,$actionList)){
	// if(!@include_once($Raiz[local].$actionList[$action])){
	// 	$page = file_get_contents($Raiz[url].$actionList[$action]);
	// 	print $page;
	// }
	header('location: '.$Raiz[url].$actionList[$action]);
}else{
	$tpl_data  = array(contenido => array(MENSAJE => "Acción no disponible. ".$action));
	html($Path['html'].'error.html', array_merge($tpl_data,$tpl_header,$tpl_menu,$tpl_submenu));
}
/*O3M*/
?>