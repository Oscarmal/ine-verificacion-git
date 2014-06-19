/*O3M*/
$(document).ready(function(){
	
});


function login(){	
	var ajax_url = "src/php/login.php";
    var usuario = $("#usuario").val();
    var clave = $("#clave").val();
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
			txt = "validando credenciales, por favor espere...";
	        message = "<img src='common/img/wait.gif' valign='middle' align='center'>&nbsp "+txt;
	        // $('#msj').html(message); 
	        showMessage(message, '#msj');   
	    },
      success: function(data){                           
      	if(data){	
			 	alert("Entró");
      	}else{
			 
			showMessage('Error', '#msj');
		}  
	  }
    });
}

function showMessage(txt, id){
    $(id).html(txt);
}
/*O3M*/