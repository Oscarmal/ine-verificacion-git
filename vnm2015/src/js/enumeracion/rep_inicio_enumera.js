// jq = jQuery.noConflict();
$.noConflict();

$(document).ready(function(){

});

function foco(){
// alert("CONTESTA DETENIDAMENTE EL REPORTE DE INICIO POR FAVOR");
	// document.getElementById("p2").focus();
}

//funcion para la primer		
function pe2(b){
	// if(b){b = 'si';}else{b='no';}
	if(b=='si'){		
		 $("p2_obs").disabled=true;
		 $("p2_obs").value="";
		 $("p3").disabled=false;		 
		 $("p3").focus();	
	 }else if (b=='no'){	
		 alert("Ingresa el motivo por el cual no estuvo completa la plantilla");
		 // $("#p2_obs").prop('disabled', false);
		 $("p2_obs").disabled=false;
		 $("p2_obs").focus();
	}else{
	     alert("solo puedes seleccionar si o no ");
		 $("p2").focus();
		 $("p2").value="";
	 }
}


function obs_pe2(bb) {
	
		 if (bb!=""){
			
			 $("p3").disabled=false;	
  			 $("p3").focus();
	
	}else{
	
		alert("Escribe el motivo por el cual no estuvo completa la plantilla")
		$("p2_obs").disabled=false;	
	    $("p2_obs").focus();
	}
}

//funcion para la pregunta 2	
function pre2(g){
  
  			if(g=='si'){
			
			 $("p2_obs_indu").disabled=true;
			 $("p2_obs_indu").value="";
			 $("p4").disabled=false;
			 $("p4").focus();	
			 
			 
			 
			 }else if (g=='no'){
			 
			 alert("Ingrese el motivo por el cual no se entrego indumentaria");
			 $("p2_obs_indu").disabled=false;
			 $("p2_obs_indu").focus();
 	 	     
			 

			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p3").focus();
		 $("p3").value="";
	  }
}


function obs_pre2(gg) {
	
		 if (gg!=""){
			
			 $("p4").disabled=false;	
  			 $("p4").focus();
	
	}else{
	
		alert("Ingrese el motivo por el cual no se entrego indumentaria")
		$("p2_obs_indu").disabled=false;	
	    $("p2_obs_indu").focus();
	}
}

//funcion para la pregunta 3	
function pre3(h){
  
  			if(h=='si'){
			
			 $("p3_obs_mate").disabled=true;
			 $("p3_obs_mate").value="";
			 $("p5").disabled=false;
			 $("p5").focus();	
			 
			 
			 
			 }else if (h=='no'){
			 
			 alert("Ingrese el motivo por el cual no se conto con el material necesario");
			 $("p3_obs_mate").disabled=false;
			 $("p3_obs_mate").focus();
 	 	     
			 

			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p4").focus();
		 $("p4").value="";
	  }
}


function obs_pre3(hh) {
	
		 if (hh!=""){
			
			 $("p5").disabled=false;	
  			 $("p5").focus();
	
	}else{
	
		alert("Ingrese el motivo por el cual no se entrego indumentaria")
		$("p3_obs_mate").disabled=false;	
	    $("p3_obs_mate").focus();
	}
}


//funcion para la pregunta 4	
function pre4(i){
  
  			if(i=='si'){
			
			 $("p4_obs_vehi").disabled=true;
			 $("p4_obs_vehi").value="";
			 $("p6").disabled=false;
			 $("p6").focus();	
			 
			 
			 
			 }else if (i=='no'){
			 
			 alert("Ingrese el motivo por el cual no se contó con el apoyo de vehículo oficial");
			 $("p4_obs_vehi").disabled=false;
			 $("p4_obs_vehi").focus();
 	 	     
			 

			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p5").focus();
		 $("p5").value="";
	  }
}


function obs_pre4(hh) {
	
		 if (ii!=""){
			
			 $("p6").disabled=false;	
  			 $("p6").focus();
	
	}else{
	
		alert("Ingrese el motivo por el cual no se contó con el apoyo de vehículo oficial")
		$("p4_obs_vehi").disabled=false;	
	    $("p4_obs_vehi").focus();
	}
}



function pe6(c){
  
  			if(c=='si'){
			
			
			 alert("Ingresa los datos del partido politico que tuvo presencia ");
			 $("p6pp1").disabled=false;
			 $("p6pp1").focus();
			 
			 }else if (c=='no'){
			 
			 /*desactivar los valores del representante de partido politico 1*/
			 $("p6pp1").disabled=true;
			 $("p6pp1").value="0";
			 $("p6ins1").disabled=true;
			 $("p6ins1").value="0";
			 $("p6nom1").disabled=true;
			 $("p6nom1").value="";
			 
			 /*desactivar los valores del representante de partido politico 2*/
			 $("p6pp2").disabled=true;
			 $("p6pp2").value="0";
			 $("p6ins2").disabled=true;
			 $("p6ins2").value="0";
			 $("p6nom2").disabled=true;
			 $("p6nom2").value="";
			 
			 /*desactivar los valores del representante de partido politico 3*/
			 $("p6pp3").disabled=true;
			 $("p6pp3").value="0";
			 $("p6ins3").disabled=true;
			 $("p6ins3").value="0";
			 $("p6nom3").disabled=true;
			 $("p6nom3").value="";
			 
			 /*desactivar los valores del representante de partido politico 4*/
			 $("p6pp4").disabled=true;
			 $("p6pp4").value="0";
			 $("p6ins4").disabled=true;
			 $("p6ins4").value="0";
			 $("p6nom4").disabled=true;
			 $("p6nom4").value="";
			 
			 /*desactivar los valores del representante de partido politico 5*/
			 $("p6pp5").disabled=true;
			 $("p6pp5").value="0";
			 $("p6ins5").disabled=true;
			 $("p6ins5").value="0";
			 $("p6nom5").disabled=true;
			 $("p6nom5").value="";
			 
			 $("p7").disabled=false;
			 $("p7").focus();	
			
			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p6").focus();
		 $("p6").value="";
	  }
}

						/*pase del combo 1 para seleccionar los partidos politicos*/

function pase_pp_1(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6pp1").focus();
			 $("p6pp1").value="";
			 
			 }else if(d<=11){
				
			 $("p6ins1").disabled=false;
			 $("p6ins1").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6pp1").focus();
		 $("p6pp1").value="";
	  }
}

			/*pasa del combo 1 de la istancia para seleccionar la instancia*/

function pase_ins_1(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6ins1").focus();
			 $("p6ins1").value="";
			 
			 }else if(d<=3){
				
			 $("p6nom1").disabled=false;
			 $("p6nom1").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6ins1").focus();
		 $("p6ins1").value="";
	  }
}


/*pase para preguntar si huvo presencia de otro representante de partido politico*/



function pase_nom_1() {
	var answer = confirm("Hubo presencia de otro representante de partido político \n Presiona ACEPTAR si hay otro representante\n Presiona CANCELAR en caso de que haya otro representante ")
	if (answer){
		alert("Captura la información del representante partido politico")
		$("p6pp2").disabled=false;
	    $("p6pp2").focus();
	}
	else{
		alert("Continua con la Captura")
		$("p7").disabled=false;	
	    $("p7").focus();
	}
}




/********************************pases para el representante 2*******************************************************/

function pase_pp_2(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6pp2").focus();
			 $("p6pp2").value="";
			 
			 }else if(d<=11){
				
			 $("p6ins2").disabled=false;
			 $("p6ins2").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6pp2").focus();
		 $("p6pp2").value="";
	  }
}

			/*pasa del combo 1 de la istancia para seleccionar la instancia*/

function pase_ins_2(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6ins2").focus();
			 $("p6ins2").value="";
			 
			 }else if(d<=3){
				
			 $("p6nom2").disabled=false;
			 $("p6nom2").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6ins2").focus();
		 $("p6ins2").value="";
	  }
}


/*pase para preguntar si huvo presencia de otro representante de partido politico*/



function pase_nom_2() {
	var answer = confirm("Hubo presencia de otro representante de partido político \n Presiona ACEPTAR si hay otro representante\n Presiona CANCELAR en caso de que haya otro representante ")
	if (answer){
		alert("Captura la información del representante partido politico")
		$("p6pp3").disabled=false;
	    $("p6pp3").focus();
	}
	else{
		alert("Continua con la Captura")
		$("p7").disabled=false;	
	    $("p7").focus();
	}
}


/********************************************************************************************************************/


/********************************pases para el representante 3*******************************************************/

function pase_pp_3(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6pp3").focus();
			 $("p6pp3").value="";
			 
			 }else if(d<=11){
				
			 $("p6ins3").disabled=false;
			 $("p6ins3").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6pp3").focus();
		 $("p6pp3").value="";
	  }
}

			/*pasa del combo 1 de la istancia para seleccionar la instancia*/

function pase_ins_3(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6ins3").focus();
			 $("p6ins3").value="";
			 
			 }else if(d<=3){
				
			 $("p6nom3").disabled=false;
			 $("p6nom3").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6ins3").focus();
		 $("p6ins3").value="";
	  }
}


/*pase para preguntar si huvo presencia de otro representante de partido politico*/



function pase_nom_3() {
	var answer = confirm("Hubo presencia de otro representante de partido político \n Presiona ACEPTAR si hay otro representante\n Presiona CANCELAR en caso de que haya otro representante ")
	if (answer){
		alert("Captura la información del representante partido politico")
		$("p6pp4").disabled=false;
	    $("p6pp4").focus();
	}
	else{
		alert("Continua con la Captura")
		$("p7").disabled=false;	
	    $("p7").focus();
	}
}


/********************************************************************************************************************/


/********************************pases para el representante 4*******************************************************/

function pase_pp_4(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6pp4").focus();
			 $("p6pp4").value="";
			 
			 }else if(d<=11){
				
			 $("p6ins4").disabled=false;
			 $("p6ins4").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6pp4").focus();
		 $("p6pp4").value="";
	  }
}

			/*pasa del combo 1 de la istancia para seleccionar la instancia*/

function pase_ins_4(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6ins4").focus();
			 $("p6ins4").value="";
			 
			 }else if(d<=3){
				
			 $("p6nom4").disabled=false;
			 $("p6nom4").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6ins4").focus();
		 $("p6ins4").value="";
	  }
}


/*pase para preguntar si huvo presencia de otro representante de partido politico*/



function pase_nom_4() {
	var answer = confirm("Hubo presencia de otro representante de partido político \n Presiona ACEPTAR si hay otro representante\n Presiona CANCELAR en caso de que haya otro representante ")
	if (answer){
		alert("Captura la información del representante partido politico")
		$("p6pp5").disabled=false;
	    $("p6pp5").focus();
	}
	else{
		alert("Continua con la Captura")
		$("p7").disabled=false;	
	    $("p7").focus();
	}
}


/********************************************************************************************************************/



/********************************pases para el representante 5*******************************************************/

function pase_pp_5(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6pp5").focus();
			 $("p6pp5").value="";
			 
			 }else if(d<=11){
				
			 $("p6ins5").disabled=false;
			 $("p6ins5").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6pp5").focus();
		 $("p6pp5").value="";
	  }
}

			/*pasa del combo 1 de la istancia para seleccionar la instancia*/

function pase_ins_5(d){
  
  			
			
			 if (d==0){
			alert("Elige algúna opción por favor");
			 $("p6ins5").focus();
			 $("p6ins5").value="";
			 
			 }else if(d<=3){
				
			 $("p6nom5").disabled=false;
			 $("p6nom5").focus();
			 
			 }else{
				  
	     alert("Elige algúna opción por favor");
		 $("p6ins5").focus();
		 $("p6ins5").value="";
	  }
}


/*pase para preguntar si huvo presencia de otro representante de partido politico*/



function pase_nom_5() {
	var answer = confirm("Hubo presencia de otro representante de partido político \n Presiona ACEPTAR si hay otro representante\n Presiona CANCELAR en caso de que haya otro representante ")
	if (answer){
		alert("Captura la información del representante partido politico")
		$("p7").disabled=false;
	    $("p7").focus();
	}
	else{
		alert("Continua con la Captura")
		$("p7").disabled=false;	
	    $("p7").focus();
	}
}


/********************************************************************************************************************/



function pe7(f){
  
  			if(f=='si'){
				alert("Explique el motivo de la incidencia ");
			 
			 $("obs").disabled=true;
			 $("obs").value="";
			 $("btn_guarda_rep_ini").disabled=true;
			 $("p7_obs").disabled=false;
			 $("p7_obs").focus();
			 
			 }else if (f=='no'){
 	 	     
			
			 $("p7_obs").value="";
			 $("p7_obs").disabled=true;
			   $("p11").disabled=false;	
  			 $("p11").focus();
			 
			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p7").focus();
		 $("p7").value="";
	  }
}





/******************pase para despues de que se haya agregado el motivo de la insidencia******************************/


function p7obs(ff) {
	
		 if (ff!=""){
			
			 $("p11").disabled=false;	
  			 $("p11").focus();
	
	}else{
	
		alert("Explique la incidencia presentada")
		$("p7_obs").disabled=false;	
	    $("p7_obs").focus();
	}
}
/**********************************************************************************/

function pe1(a){
  
  			if(a=='si'){
			$("p1_obs").disabled=true;
			 $("p1_obs").value="";
			 $("obs").disabled=true;
			 $("obs").value="";
				alert("Ingresa la hora del inicio del operativo con formato de hora HH:SS");
			 $("p1hrs").disabled=false;
			 $("p1hrs").focus();
			 
			 }else if (a=='no'){
 	 	     
			 $("p1hrs").disabled=true;
			 $("p1hrs").value="";
			 alert("CAPTURA EL MOTIVO POR EL CUAL NO SE INICIARON LOS TRABAJOS EN TIEMPO\n\n EXPLICA SI VAS A INICIAR Y CUANDO")
			 $("p1_obs").disabled=false;
			 $("p1_obs").focus();

			 }else{
	  
	     alert("solo puedes seleccionar si o no ");
		 $("p1").focus();
		 $("p1").value="";
	  }
}




function validaHora(hora){
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    var sExpresion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/;  
	if(!hora.match(sExpresion)){
    alert ("La Hora no tiene el Formato HH:MM\n");
	
	$("Hora").value="";
	$("Hora").focus();
	
	return false;
	}else if (hora!=''){
				//alert("Ingresa el periodo");
			var answer = confirm("DESEAS INGRESAR UNA OBSERVACIÓN  ")
	if (answer){
		alert("CAPTURA LA OBSERVACIÓN")
		$("obs").disabled=false;
	    $("obs").focus();
	}
	else{
		//alert("HASTA LUEGO")
		
		$("obs").disabled=true;
		$("obs").value="";
		
		$("btn_guarda_rep_ini").disabled=false;	
	    $("btn_guarda_rep_ini").focus();
	   return valor;
	
	}
	
	
}

	   
}	



function p1_observacion(aa){
  
  			if(aa !=''){
				//alert("Ingresa el periodo");
			var answer = confirm("DESEAS INGRESAR UNA OBSERVACIÓN  ")
	if (answer){
		alert("CAPTURA LA OBSERVACIÓN")
		$("obs").disabled=false;
	    $("obs").focus();
	}
	else{
		//alert("HASTA LUEGO")
		
		$("obs").disabled=true;
		$("obs").value="";
		
		$("btn_guarda_rep_ini").disabled=false;	
	    $("btn_guarda_rep_ini").focus();
	}
}
}



/**********************pase despues de que ingresaron las observaciones y se va guardar el docto*************************/

function observaciones(g) {
	
		 if (g!=""){
			
			 $("btn_guarda_rep_ini").disabled=false;	
  			 $("btn_guarda_rep_ini").focus();
	
	}else{
	
		alert("escribe tu comentario por favor")
		$("obs").disabled=false;	
	    $("obs").focus();
	}
}

/*******************VALIDACION  DE QUE NO VALLAN CAMPOS VACIOS en los radio buttons *********************************/

function validar(p2, p3, p4, p5, p6, p7,p11,p1){
var a; var z; var error="";
z=0;
var i; var ok; 
ok=0;
var j; var o;
o=0;
var k; var c;
c=0;
var l; var d;
d=0;
var m; var e;
e=0;
var n; var f;
f=0;
var p; var g;
g=0;


for(a=0; a<p2.length;a++){
			if(p2[a].checked)
					{
						z=1
					}
		}

		
		
		for(i=0; i<p3.length;i++){
			if(p3[i].checked)
					{
						ok=1
					}
		}
		
for(j=0; j<p4.length;j++){
if(p4[j].checked)
{
o=1
}}
for(k=0; k<p5.length;k++){
if(p5[k].checked)
{
c=1
}}
for(l=0; l<p6.length;l++){
if(p6[l].checked)
{
d=1
}}
for(m=0; m<p7.length;m++){
if(p7[m].checked)
{
e=1
}}
for(n=0;n<p11.length;n++){
if(p11[n].checked)
{
f=1
}}
for(p=0; p<p1.length;p++){
if(p1[p].checked)
{
g=1
}}

/***********************/
if(z==0){
error+="Pregunta 1\n";
}
if(ok==0){
error+="Pregunta 2\n";
}
if(o==0){
error+="Pregunta 3\n";
}
if(c==0){
error+="Pregunta 4\n";
}
if(d==0){
error+="Pregunta 5\n";
}
if(e==0){
error+="Pregunta 6\n";
}
if(f==0){
error+="Pregunta 7\n";
}
if(g==0){
error+="Pregunta 8\n";
}
if(error!=""){
    alert("Las preguntas:\n"+error+"Son requeridas, elige una Opci\u00f3n");
    error="";
  }}          

