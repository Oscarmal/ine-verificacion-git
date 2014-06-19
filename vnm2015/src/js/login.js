$(document).ready(function(){
	
});

function validaCampos(){
	var usuario = $("#usuario").val();
	var clave = $("#clave").val();
	if(usuario == ''){
		showMessage("Por favor, ingrese su nombre de Usuario", '#msj');
		$("#usuario").focus();
		return false;
	}
	if(clave == ''){
		showMessage("Por favor, ingrese su Clave", '#msj');
		$("#clave").focus();
		return false;
	}
	login(usuario, clave);
}

function login(usuario, clave){	
	var ajax_url = "src/php/login.php";
	$.ajax({
		type: 'POST',
		url: ajax_url,
		dataType: "json",
		data: {      
			auth : 1,
			usuario : usuario,
			clave : clave
		},
		beforeSend: function(){    
			txt = "Validando credenciales, por favor espere...";
		    message = "<img src='common/img/wait.gif' valign='middle' align='center'>&nbsp "+txt;
		    showMessage(message, '#msj');   
		},
		success: function(respuesta){ 
			if(respuesta.success){
				location.href = respuesta.url;
			}else{
				location.href = respuesta.url;
			}
		},
		complete: function(){    
		    $('#msj').empty();
		}
    });
}

function showMessage(txt, id){
    $(id).html(txt);
}
/*O3M*/