<?php /*O3M*/
/**
* Descripcion:	Funciones para contruir la vista de salida HTML
* Creación:		2014-06-17
* @author 		Oscar Maldonado - O3M
*
*/

// -- Principales
function contenidoHtml($template='error.html', $params=array()){
	global $Path, $Raiz;
	#GENERAL
	$htmlTpl = $Path['html'].$template;
	$html = new Template($htmlTpl);
	$html->set('PATH_JS', $Path[js]);
	$html->set('PATH_CSS', $Path[css]);
	$html->set('PATH_IMG', $Path[img]);
	$more = ($params[MORE])?$params[MORE]:'';
	$html->set('INCLUDES', includesHtml($more));
	$html->set('FOOTER', footerHtml());
	// Busca variables adicionales dentro array $params
	if($tvars = count($params)){		
		$vnames = array_keys($params);
		$vvalues = array_values($params);
		foreach($params as $vname => $vvalue){
			$html->set($vname, $vvalue);
		}
	}
	$html=$html->output();
	return $html;
}

function headerHtml($template='header.html', $params=array()){
	global $Path, $Raiz;
	#HEADER
	$htmlTpl = $Path['html'].$template;
	$header = new Template($htmlTpl);
	$header->set('PATH_JS', $Path[js]);
	$header->set('PATH_CSS', $Path[css]);
	$header->set('PATH_IMG', $Path[img]);
	$more = ($params[MORE])?$params[MORE]:'';
	$header->set('INCLUDES', includesHtml($more));	
	if($tvars = count($params)){		
		$vnames = array_keys($params);
		$vvalues = array_values($params);
		foreach($params as $vname => $vvalue){
			$header->set($vname, $vvalue);
		}
	}
	$header=$header->output();
	return $header;
}

// -- Apoyos
function includesHtml($more='', $template='includes.html', $params=array()){
	global $Path, $Raiz;
	#INCLUDES HTML
	$htmlTpl = $Path['html'].$template;
	$includes = new Template($htmlTpl);
	$includes->set('PATH_JS', $Path[js]);
	$includes->set('PATH_CSS', $Path[css]);
	$more = ($more)?$more:'';
	$includes->set('MORE', $more);
	$includes=$includes->output();
	return $includes;
}

function footerHtml($template='footer.html', $params=array()){
	global $Path, $Raiz;
	#FOOTER CONTENIDO
	$htmlTpl = $Path['html'].$template;
	$footer = new Template($htmlTpl);
	$footer->set('PATH_JS', $Path[js]);
	$footer->set('PATH_CSS', $Path[css]);
	$footer->set('PATH_IMG', $Path[img]);
	$footer->set('ANIO', date('Y'));
	$footer=$footer->output();
	return $footer;
}

function frameHtml($template='frame.html', $params=array()){
	global $Path, $Raiz;
	#FRAME
	$htmlTpl = $Path['html'].$template;
	$frame = new Template($htmlTpl);
	// $frame->set('HEADER', $Path[src].'php/vnm.php?a=header');
	// $frame->set('CONTENIDO', $Path[src].'php/vnm.php?a=contenido');
	$frame->set('FOOTER',footerHtml());
	$frame=$frame->output();
	return $frame;
}

function errorHtml($params=array()){
	global $Path, $Raiz;
	#ERROR CONTENIDO
	$htmlTpl = $Path['html'].'error.html';
	$error = new Template($htmlTpl);
	$error->set('PATH_JS', $Path[js]);
	$error->set('PATH_CSS', $Path[css]);
	$error->set('PATH_IMG', $Path[img]);
	$more = ($params[MORE])?$params[MORE]:'';
	$error->set('INCLUDES', includesHtml($more));
	$error->set('FOOTER',footerHtml());
	// Busca variables adicionales dentro array $params
	if($tvars = count($params)){		
		$vnames = array_keys($params);
		$vvalues = array_values($params);
		foreach($params as $vname => $vvalue){
			$error->set($vname, $vvalue);
		}
	}
	$error->set('MENSAJE', $params[MENSAJE].' '.$params[ACCION]);
	$error=$error->output();
	return $error;
}
/*O3M*/
?>