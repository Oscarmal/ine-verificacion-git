<?php /*O3M*/
include_once('common/php/inc.path.php');
$_SESSION['header_path']=$RaizLoc.'common/php/inc.header.php';
require_once('common/php/inc.functions.php');
require_once('common/php/inc.template.php');
require_once('common/php/class.pdo.php');
parseFormSanitizer($_GET, $_POST);
// Cabeceras de HTML (CSS,JS,etc.)
$tpl_header  = array(cabecera => array(
					 CSS => ""
					,JS => '<script type="text/javascript" src="'.'common/js/'.'jquery-1.9.1.min.js"></script>'
					,MORE => ""
					)
				);
$tpl_data = array();
$tpl_menu = array();
$tpl_submenu = array();
/**********/
//--Bussines
unset($_SESSION['usuario']);
if(!empty($ins[usuario]) && !empty($ins[clave])){
	$tmpUsuario = 'admin';
	$tmpClave = 'super';
	if($ins[usuario]==$tmpUsuario && $ins[clave]==$tmpClave){
		$_SESSION['usuario'] = $ins[usuario];
		header('location: vnm.php?a=test');
	}else{
		header('location: index.php?e=2');
	}
}

switch($ins[e]){
	case 1 : $msj = "Sesión Cerrada.";
		break;
	case 2 : $msj = "Los datos de Usuario/Clave son incorrectos.";
		break;
	default : $msj = "Ingrese su usuario y contraseña";
}	

//--Template
$vista = 'html/login.html';
$contenido = '<h1>DDVC - Subdirección de Verificación</h1>
			  <h2>Estructura de sistema VNM2015</h2>
			  <hr/>'.$msj;
$tpl_data = array( 
			contenido => array(
				CONTENIDO => $contenido
				)
			);
html($vista, array_merge($tpl_data,$tpl_header,$tpl_menu,$tpl_submenu));
/*O3M*/
?>


