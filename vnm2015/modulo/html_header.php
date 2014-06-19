<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
require_once($Path[mod].'menutop.php');
$vista = 'header.html';
$tpl_data = array( 
			 LOGO => $Path[img].'ifenormal.png'
			,FECHA => date('Y/m/d H:i:s')
			,MENU => $menutop
			,USUARIO => $usu[usuario].' | '.$usu[nombre]
			,MORE => '<link href="'.$Path[css].'estilo_encabezado.css" rel="stylesheet" type="text/css">'
		);
print(headerHtml($vista,$tpl_data));
?>