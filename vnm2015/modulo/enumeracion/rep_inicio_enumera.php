<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
$vista = 'enumeracion/rep_inicio_enumera.html';		
$tpl_data = array( 
			 MORE => '<link href="'.$Path[css].'estilo_contenido.css" rel="stylesheet" type="text/css">
			          
			          <script type="text/javascript"  src="'.$Path[src].'js/enumeracion/rep_inicio_enumera.js"></script>'
			
		);
print(contenidoHtml($vista, $tpl_data));
?>
