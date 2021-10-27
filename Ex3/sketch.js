let fps;
let angulo, raio, incremento;
let x, y;
let zoom;

function setup() {
  
  createP("");
  createP("O controle deslizante representa a velocidade da animação.");
  fpsSlider = createSlider(0, 90, 60);
  createP("")
  createP("A entrada da esquerda representa o tamanho do ângulo inicial.");
  createP("A entrada da direita representa o tamanho do incremento.");
  lenInput = createInput("3").attribute('placeholder', 'Tamanho do ângulo inicial');
  stepInput = createInput("2").attribute('placeholder', 'Tamanho do incremento');
  createP("");
  createP("Após realizar as alterações nos valores, clique no botão resetar.");
  buttonClear = createButton("Resetar");
  buttonClear.mousePressed(clearBG);
  
  fps = 20;
  zoom = 1;
  x = 0;
  y = 0;
  
  
  raio = 8 * zoom;
  angulo = float(lenInput.value());
  incremento = float(stepInput.value());
  
  createCanvas(800, 800);
  frameRate(fps);
  background(220);
}

function draw() {
  fps = fpsSlider.value();
  frameRate(fps);
  
  translate(width/2,height/2);
  scale(zoom);
  translate(-width/2,-height/2);
  
  x = width/2 + raio * cos(angulo);
  y = height/2 + raio * sin(angulo);
  strokeWeight(2);
  stroke(0);
  point(x, y);
  angulo += incremento;
  if(angulo >= 2 * PI){
    angulo = angulo % (2 * PI);
    raio += 2;
  } 
}

function clearBG(){
  background(220);
  stroke(0);
  strokeWeight(1);

  raio = 8 * zoom;
  
  if(float(lenInput.value()) >= 0  && float(stepInput.value()) >= 0 && float(lenInput.value()) >= float(stepInput.value())){
    angulo = float(lenInput.value());
    incremento = float(stepInput.value());
  }
}