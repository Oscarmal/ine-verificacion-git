<?php #session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);
/*HEADERS*/
include_once('../../common/php/inc.path.php');
$_SESSION['header_path']=$RaizLoc.'common/php/inc.header.php';
require_once($RaizLoc.'common/php/inc.functions.php');
require_once($RaizLoc.'common/php/class.template.php');
require_once($RaizLoc.'common/php/inc.constructHtml.php');
require_once($RaizLoc.'common/php/inc.mysqli.php');
$Path[js]=$RaizUrl.'common/js/';
$Path[css]=$RaizUrl.'common/css/';
$Path[img]=$RaizUrl.'common/img/';
$Path[html]=$RaizLoc.'html/';
$Path[src]=$RaizLoc.'src/';
parseFormSanitizer($_GET, $_POST);
/**********/
?>
<?php /*O3M*/
/**
* Descripcion:	Autentificación de usuario
* Creación:		2014-06-19
* @author 		Oscar Maldonado - O3M
*
*/
// unset($_SESSION['usuario']);
if($ins[auth]){
	if(!empty($ins[usuario]) && !empty($ins[clave])){
		$tabla = "usuarios_test";
		$sql = "SELECT count(*), usuario, nombre, apellidos, grupo, id_ent, id_dtto, id_usuario FROM $tabla WHERE usuario='$ins[usuario]' and clave='$ins[clave]'";
		$sqlResult = SQLQuery($sql);
		if($sqlResult[0]){
			session_name('ddvc');
			session_start();
			$_SESSION['id_usuario'] = $sqlResult[id_usuario];
			$_SESSION['usuario'] = $sqlResult[usuario];
			$_SESSION['grupo'] = $sqlResult[grupo];
			$_SESSION['usuarioNombre'] = $sqlResult[nombre].' '.$sqlResult[apellidos];
			$_SESSION['ent'] = $sqlResult[id_ent];
			$_SESSION['dto'] = $sqlResult[id_dtto];
			$Result = array(success => 1, url => 'src/php/vnm.php?a=frame');		
		}else{
			$Result = array(success => 0, url => 'index.php?e=2&v='.$ins[usuario]);
		}
	}else{
		$Result = array(success => 0, url => 'index.php?e=3');
	}
}else{
	$Result = array(success => 0, url => 'index.php?e=3');
}
echo json_encode($Result);
/*O3M*/
?>