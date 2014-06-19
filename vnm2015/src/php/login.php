<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php /*O3M*/
/**
* Descripcion:	Autentificación de usuario
* Creación:		2014-06-19
* @author 		Oscar Maldonado - O3M
*
*/
unset($_SESSION['usuario']);
if(!empty($ins[usuario]) && !empty($ins[clave])){
	$tmpUsuario = 'admin';
	$tmpClave = 'super';
	if($ins[usuario]==$tmpUsuario && $ins[clave]==$tmpClave){
		$_SESSION['usuario'] = $ins[usuario];
		$Result = array(success => 1, url => 'src/php/vnm.php?a=frame');		
	}else{
		$Result = array(success => 0, url => 'index.php?e=2');
	}
}
echo json_encode($Result);
/*O3M*/
?>