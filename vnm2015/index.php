<?php /*O3M*/
/*HEADERS*/
include_once('common/php/inc.path.php');
$_SESSION['header_path']=$RaizLoc.'common/php/inc.header.php';
require_once('common/php/inc.functions.php');
require_once('common/php/class.template.php');
require_once('common/php/inc.constructHtml.php');
$Path[js]='common/js/';
$Path[css]='common/css/';
$Path[img]='common/img/';
$Path[html]='html/';
$Path[src]='src/';
parseFormSanitizer($_GET, $_POST);
/**********/
unset($_SESSION['usuario']);
switch($ins[e]){
	case 1 : $msj = "<span class='text-blue'>Sesión Cerrada.</span>";
		break;
	case 2 : $msj = "<span class='text-blue'>Los datos de Usuario/Clave son incorrectos.</span>";
		break;
	case 3 : $msj = "<span class='text-red'>Sin autorización para entrar.</span>";
		break;
	default : $msj = "<span class='text-red'>Ingrese su usuario y contraseña</span>";
}	

//--Template
$vista = 'login.html';
$tpl_data = array(			
			 MORE => '<link href="'.$Path[css].'estilo_contenido.css" rel="stylesheet" type="text/css">
					<script type="text/javascript" src="'.$Path[src].'js/login.js"></script>'
			,LOGO => $Path[img].'ifenormal.png'
			,FECHA => date('Y/m/d H:i:s')
			,MENSAJE => $msj
			);
print(contenidoHtml($vista, $tpl_data));
/*O3M*/
?>


