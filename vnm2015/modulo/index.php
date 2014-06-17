<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
$vista = $Path[html].'frame.html';
$tpl_data = array( 
		contenido => array(
			 HEADER => $Raiz[url].'vnm.php?a=header'
			,CONTENIDO => $Raiz[url].'vnm.php?a=test'
			)
		);
html($vista, array_merge($tpl_data,$tpl_header,$tpl_menu,$tpl_submenu));
?>
