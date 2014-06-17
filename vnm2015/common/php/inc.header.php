<?php /*O3M*/
/**
* Descripcion:	Establece ambiente de trabajo apra cada página
* Creación:		2014-06-11
* @author 		Oscar Maldonado - O3M
*
*/
// Establece zona horaria y tipo de codificación
date_default_timezone_set("America/Mexico_City");
header('Content-Type: text/html; charset=utf-8');
// Detección de ruta y definicion de paths de trabajo
require_once('inc.path.php');
$Raiz[local] = $_SESSION[RaizLoc];
$Raiz[url] = $_SESSION[RaizUrl];
$Raiz[sitefolder] = $_SESSION[SiteFolder];
$Path[php]=$Raiz[local].'common/php/';
$Path[js]=$Raiz[url].'common/js/';
$Path[css]=$Raiz[url].'common/css/';
$Path[img]=$Raiz[url].'common/img/';
$Path[html]=$Raiz[local].'html/';
// Prepara archivos de apoyo
require_once($Path[php].'inc.functions.php');
require_once($Path[php].'inc.template.php');
require_once($Path[php].'class.pdo.php');
require_once($Path[php].'inc.mysqli.php');
// Parsea parámetros obtenidos por URL y los pone en arrays: $in[] y $ins[]
parseFormSanitizer($_GET, $_POST); # $ins[]
parseForm($_GET, $_POST); # $in[]
// Validación de sesión
if(!$_SESSION['usuario']) { 
	header('location: '.$Raiz[url].'index.php?e=2');
	exit();
}
// Cabeceras de HTML (CSS,JS,etc.)
$tpl_header  = array(cabecera => array(
					 CSS => ""
					,JS => '<script type="text/javascript" src="'.$Path[js].'jquery-1.9.1.min.js"></script>'
					,MORE => ""
					)
				);
$tpl_data = array();
$tpl_menu = array();
$tpl_submenu = array();
/*O3M*/
?>