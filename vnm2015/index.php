<?php /*O3M*/
/*HEADERS*/
include_once('common/php/inc.path.php');
$_SESSION['header_path']=$RaizLoc.'common/php/inc.header.php';
require_once('common/php/inc.functions.php');
require_once('common/php/class.template.php');
require_once('common/php/inc.constructHtml.php');
require_once('common/php/class.pdo.php');
require_once('common/php/inc.mysqli.php');
$Path[js]='common/js/';
$Path[css]='common/css/';
$Path[img]='common/img/';
$Path[html]='html/';
parseFormSanitizer($_GET, $_POST);
/**********/
//--Bussines
unset($_SESSION['usuario']);
if(!empty($ins[usuario]) && !empty($ins[clave])){
	$tmpUsuario = 'admin';
	$tmpClave = 'super';
	if($ins[usuario]==$tmpUsuario && $ins[clave]==$tmpClave){
		$_SESSION['usuario'] = $ins[usuario];
		header('location: src/php/vnm.php?a=frame');
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
$vista = 'login.html';
$contenido = '<h1>DDVC - Subdirección de Verificación</h1>
			  <h2>Estructura de sistema VNM2015</h2>
			  <hr/>'.$msj;
$tpl_data = array(CONTENIDO => $contenido);
print(contenidoHtml($vista, $tpl_data));
/*O3M*/
?>


