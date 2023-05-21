var angle = 0;
function setup() {
  createCanvas(600, 600);
  background(255, 255, 204); //amarillo claro
  frameRate(20); //velocidad
  angleMode(DEGREES);
}

function draw() {
  strokeWeight(1);
  //console.log("X: " + mouseX + " Y:" + mouseY);
  push();
  console.log( "Ahora mismo el background esta activado, pero para tener algunos efectos extraños juegue con desactivarlo" );
  //se desactiva con "//"
  background(255, 255, 204);

  //rectangulos
  fill(128, 255, 0);
  rect(482, 10, 20, 200);
  fill(102, 0, 102);
  rect(430, 50, 20, 200);
  fill(255, 0, 255);
  rect(430, 50, 20, 200);
  fill(127, 0, 23);
  rect(530, 36, 100, 130);
  fill(0);
  rect(50, 400, 5, 200);
  fill(51, 0, 102);

  
  //a ver que sale aca, quiero intentar ir generando cuadrados con los colores que elegí en el sketch 1
  push();
  if (mouseX < 100) {
    //cuando en la x llego a 100 aparece el cuadrado lila oscuro
    fill(159, 134, 192); //relleno lila
    rect(200, 300, 150, 150); // cuadrado 1
  } else if (mouseX >= 100 && mouseX < 300) {
    // Usando "&&" para combinar ambos valores. Else para que se muestre el segundo cuadrado y el tercero por si avanzamos a 300 en la variable x
    fill(94, 84, 142); // relleno lila oscuro
    rect(230, 323, 90, 90); // cuadrado 2
  } if (mouseX >= 300) {
    fill(35, 25, 66); // relleno violeta
    rect(255, 350, 40, 40); //cuadrado 3
  }
  pop();

  
  fill(0);
  rect(50, 400, 130, 10);
  rect(100, 500, 50, 86);
  rect(285, 152, 50, 143);
  rect(482, 391, 30, 90);
  rect(347, 633, 61, 60);

  //esfera
  fill(128, 255, 0);
  ellipse(350, 100, 100, 100);
  fill(0, 102);
  ellipse(365, 120, 100, 100);
  fill(255, 153, 51);
  ellipse(325, 190, 50, 50);
  fill(255);
  strokeWeight(3);
  fill(255, 255, 0);
  triangle(200, 52, 630, 320, 640, 380);
  fill(255);

  //todo el tema ojo
  push();
  translate(500, 300); //con esto ubico el circulo en el sketch
  rotate(angle); //variable
  angle++;
  ellipse(0, 0, 200, 100); //los dos primeros parametros marcan en que radio quiero que se mueva, en este caso yo queria que se mueva sobre si mismo y por eso es doble 0
  pop();

  fill(0, 0, 255);
  ellipse(500, 300, 100, 100);
  fill(255, 0, 127);
  ellipse(500, 300, 40, 40);
  fill(10);
  ellipse(500, 300, 10, 10);

  strokeWeight(1);
  fill(255);
  strokeWeight(0);
  ellipse(140, 540, 10, 10);

  //linea
  strokeWeight(1);
  line(10, 500, 310, 30);
  strokeWeight(2);
  line(20, 20, 200, 200);
  line(300, 300, 30, 200);
  line(588, 10, 20, 200);
  line(400, 330, 200, 20);
  line(400, 400, 200, 20);
  line(240, 40, 40, 40);
  strokeWeight(8);
  line(200, 500, 900, 400);
  strokeWeight(3);
  line(200, 200, 200, 55);
  line(200, 600, 900, 400);

  push() //jugando con linea
  line(0, 0, mouseX, mouseY); // arriba a la izquierda, los dos primeros parametros quiero que apunten a "x" e "y"
  line(width, 0, mouseX, mouseY); //arriba a la derecha, primer parametro utilizo una variable que equivale al ancho del lienzo, seria 600
  pop()

  //triangulo
  strokeWeight(2);
  fill(0, 153, 76);
  triangle(100, 200, 200, 200, 200, 300);
  fill(255, 0, 0);
  triangle(400, 600, 600, 500, 500, 500);

  //bezier
  bezier(200, 500, 200, 20, 30, 500, 50, 50);
 

  //quad
  fill(255, 255, 0);
  quad(300, 200, 200, 290, 200, 250, 270, 200);
}
