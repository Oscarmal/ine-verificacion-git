/*O3M*/
$(document).ready(function(){
	
});


function login(user, pass){	
	var ajax_url = "../php/login.php";
    var t = 'pdf';
    var ent = $("#ent").val();
    var dto = $("#dto").val();
    $.ajax({
      type: 'POST',
      url: ajax_url,
      dataType: "json",
      data: {      
	      auth : 1,
	      t : t,
	      ent : ent,
	      dto : dto,
	      soloPendientes : 0
      },
      beforeSend: function(){    
			txt = "Generando documento, por favor espere...";
	        message = $("<span class='before'><img src='common/img/loader2.gif' valign='middle' align='center'>&nbsp "+txt+"</span>");
	        showMessage(message);      
	    },
      success: function(data){                           
      	if(data != 0){	
			if(data[0]=='pdf'){        			
    			txt = "Archivo generado correctamente.";
	            message = $("<span class='success'><img src='common/img/yes.png' width='30' valign='middle' align='center'>&nbsp "+txt+"</span>");
	            $("#tabla-resultados").html("Archivo Generado. <a href='"+data[1]+data[2]+"' title='Descargar' target='_blank'><br/><img src='common/img/pdf.gif' border='0' valing='middle'>"+data[2]+"</a>");
	        }else if(data[0]=='ERROR'){ 
	        	txt = data[1];
	        	message = $("<span class='error'><img src='common/img/no.png' width='30' valign='middle' align='center'>&nbsp "+txt+"</span>");
	    	}else{
	    		txt = "Error al generar archivo. "+data;
	        	message = $("<span class='error'><img src='common/img/no.png' width='30' valign='middle' align='center'>&nbsp "+"Ha ocurrido un error al guardar los datos.</span>");
	        }
	        showMessage(message); 	
      	}else{
			alert("Error al envíar datos"); 
		}  
	  }
    });
}
/*O3M*/