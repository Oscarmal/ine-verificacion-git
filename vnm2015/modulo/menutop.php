 <?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
$vista = 'menutop.html';
$tpl_data = array( 
			 MORE => '<link href="'.$Path[css].'menutop.css" rel="stylesheet" type="text/css">'
			,URL1 => $Path[src].'php/vnm.php?a=inicio'
			,URL2 => $Path[src].'php/vnm.php?a=enumeracion'
				,URL21 => $Path[src].'php/vnm.php?a=rep_inicio_enumera'
			,URL3 => $Path[src].'php/vnm.php?a=cobertura'
				,URL31 => $Path[src].'php/vnm.php?a=cobertura'
				,URL32 => $Path[src].'php/vnm.php?a=cobertura'
				,URL33 => $Path[src].'php/vnm.php?a=cobertura'
			,URL4 => $Path[src].'php/vnm.php?a=actualizacion'
			,URL5 => $Path[src].'php/vnm.php?a=reportes'
			,URL6 => $Path[src].'php/vnm.php?a=salir'
		);
$menutop=(contenidoHtml($vista, $tpl_data));
?>
