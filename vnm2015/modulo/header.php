<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
$vista = $Path[html].'header.html';
$tpl_data = array( 
		contenido => array(
			 LOGO => $Path[img].'logo.jpg'
			,FECHA => date('Y/m/d H:i:s')
			,MENU => $Raiz[url].'vnm.php?'
			)
		);
html($vista, array_merge($tpl_data,$tpl_header,$tpl_menu,$tpl_submenu));
?>
