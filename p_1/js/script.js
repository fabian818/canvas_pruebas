$(document).ready(function(){
	var ctx = getContextValidate('micanvas');
	if (ctx) {
		var img = new Image();
		img.src = 'image/edipo.jpg';
		img.onload = function(){
		   ctx.drawImage(img, 10, 10);
		}
	};
});

function paintSquare (context, origin_x, origin_y, side) {
	context.beginPath();		
	context.moveTo(origin_x,origin_y);
	context.lineTo(side+origin_x,origin_y);		
	context.lineTo(side+origin_x,side+origin_y);
	context.lineTo(origin_x,side+origin_y);
	context.fill();
}


function getContextValidate(idCanvas){
   var elemento = document.getElementById(idCanvas);
   if(elemento && elemento.getContext){
      var contexto = elemento.getContext('2d');
      if(contexto){
         return contexto;
      }
   }
   return FALSE;
}

function randomInt(inferior,superior){
	numPosibilidades = superior - inferior;
	aleat = Math.random() * numPosibilidades;
	aleat = Math.floor(aleat);
	return parseInt(inferior) + aleat;
}

function randomColor(){
   return "rgb(" + randomInt(0,255) + "," + randomInt(0,255) + "," + randomInt(0,255) + ")";
}