let len, step, pos, start, size, alfa, amarelo, azul, cor;
let lenInput, stepInput, p_len, p_step;
let fpsSlider, scaleSlider;
let s, p_s;
let buttonClear;

function setup() {
  createCanvas(400, 400);
  
  createP("O controle deslizante da esquerda representa a velocidade da animação.");
  createP("O controle deslizante da direita representa a escala da animação.");
  
  fpsSlider = createSlider(0, 30, 2);
  scaleSlider = createSlider(10, 300, 150);
  createP("")
  createP("A entrada da esquerda representa o tamanho do segmento.");
  createP("A entrada da direita representa o tamanho do incremento.");
  lenInput = createInput("2").attribute('placeholder', 'Tamanho do segmento');
  stepInput = createInput("1").attribute('placeholder', 'Tamanho do incremento');
  createP("");
  buttonClear = createButton("Resetar");
  buttonClear.mousePressed(clearBG);
  
  len = float(lenInput.value());
  p_len = len;
  
  step = float(stepInput.value());
  p_step = step;
  
  start = (width - len)/2;
  pos = start;
  size = 100;
  alfa = 100;
  amarelo = color(249, 166, 2, alfa);
//  azul = color(0, 0, 255, alfa);
  azul = amarelo;
  cor = amarelo;
  
  translate(width/2, height/2);
  s = scaleSlider.value();
  p_s = s;
  scale(s);
  translate(-width/2, -height/2);
  
  background(220);
  stroke(0, 180);
  strokeWeight(0.1);
  rectMode(CENTER);
  line( (width - len)/2, height/2, (width + len)/2, height/2);

}

function draw() {  
  fps = fpsSlider.value();
  s = scaleSlider.value();
  frameRate(fps);
  
  translate(width/2, height/2);
  scale(s);
  translate(-width/2, -height/2);
  
  if(float(lenInput.value()) >= 0  && float(stepInput.value()) >= 0 && float(lenInput.value()) >= float(stepInput.value())){
    len = float(lenInput.value());
    step = float(stepInput.value());
  }
  
  if(len != p_len || step != p_step || s != p_s){
    background(220);
    stroke(0, 180);
    strokeWeight(0.1);
    rectMode(CENTER);
    line( (width - len)/2, height/2, (width + len)/2, height/2);
    
    p_len = len;
    p_step = step;
    p_s = s;
    start = (width - len)/2;    
    pos = start;
  }

  if((pos + step) > len/2 + width/2){
    let resto = step - ((width + len)/2 - pos)
    
    if(cor == amarelo){
      cor = azul;
    } else {
      cor = amarelo;
    }

    pos = start + resto;
  } else {
    pos = pos + step;
  }
  
  
  if(pos == width/2 + len/2){
    pos = start;
  }
  
  stroke(cor);
  strokeWeight(0.08);
  point(pos, height/2);  
}

function clearBG(){
  background(220);
  stroke(0, 180);
  strokeWeight(0.1);
  rectMode(CENTER);
  line( (width - len)/2, height/2, (width + len)/2, height/2);

  p_len = len;
  p_step = step;
  p_s = s;
  start = (width - len)/2;    
  pos = start;
}