<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php 
// print(frameHtml()); 
require_once($Path[mod].'menutop.php');
$vista = 'index.html';
$tpl_data = array( 
			 LOGO => $Path[img].'ifenormal.png'
			,FECHA => date('Y/m/d H:i:s')
			,MENU => $menutop
			,USUARIO => $usu[usuario].' | '.$usu[nombre]
			,MORE => '<link href="'.$Path[css].'estilo_encabezado.css" rel="stylesheet" type="text/css">'
			,CONTENIDO => $Raiz[url].'src/php/vnm.php?a=contenido'
		);
print(contenidoHtml($vista, $tpl_data));
?>
