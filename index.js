var zoomXY = 1;   // Zoom (mesmo pro x e pro y)
var escalaXY = 1; // Escala (mesma pro x e pro y)

function fcanvas(){
var scale = 1;
var originx = 0;
var originy = 0;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
  /*
ctx.clearRect(0, 0, c.width, c.height); // Limpa o canvas antes de desenhar
ctx.save();                             // Salva as transformações
ctx.scale(escalaXY, escalaXY);          // Aplica a escala
  /*
ctx.beginPath(); 
ctx.strokeStyle = '#000000'; 
ctx.lineWidth = 2; 
ctx.font='20px Arial';
ctx.beginPath();
ctx.moveTo(500,250) 
ctx.lineTo(500,250-(aa)); 
ctx.lineTo(500-(-bb),250 ); 
ctx.lineTo(500,250); 
ctx.font='12px Arial';
ctx.fillText("Tela 1000x500",20,20);
ctx.stroke(); 
  */
ctx.restore();                          // Reseta as transformações
}

function zoom(dv) {
  zoomXY += dv;
  document.getElementById("myCanvas").style.transform = "scale(" + zoomXY + ")";
}

function escala(dv) {
  escalaXY += dv;
  fcanvas();
}

var aa = 100;
var bb = 100;
fcanvas();
