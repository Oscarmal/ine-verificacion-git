<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
require_once($Path[mod].'menutop.php');
$vista = 'header.html';
$tpl_data = array( 
			 LOGO => $Path[img].'logo.jpg'
			,FECHA => date('Y/m/d H:i:s')
			,MENU => $menutop
		);
print(headerHtml($vista,$tpl_data));
?>