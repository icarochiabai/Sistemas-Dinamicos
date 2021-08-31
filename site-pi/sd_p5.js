pi = "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302"

function setup() {
  createCanvas(800, 800);

}

var t = 0;
var s = 0.1;

function mouseWheel (event){
  if(s - map(event.delta, -100, 100, -0.01, 0.01) >= 0){
    s -= map(event.delta, -100, 100, -0.01, 0.01);
  }
}
function draw() {
  background(0);
  t = 0.000002*millis()
  textSize(16);
  stroke(0);
  fill(255);
  textAlign(LEFT, TOP);
  text("A cada millisegundo, rotacionamos o plano por uma quantia dependente do tempo e do dígito\nde pi correspondente ao ponto (tempo * digito).\nSe o ponto for par, rotacionamos em sentido horário.\nSe não, rotacionamos em sentido anti-horário.\n\nValor atual: " + str(t) + " * dígito\nRode o scroll do mouse para mudar a escala.", 64, 32);

  translate(width/2, height/2);

  strokeWeight(4);

  for(var i = 0; i < pi.length; i++){
    if(pi[i] % 2 == 0){
      rotate(pi[i] * t);
    } else {
      rotate(-pi[i] * t);
    }
    var cor1 = map(i, 0, pi.length, 0, 255)
    stroke(0.8*cor1, 0, 1.8*cor1, i);
    point(abs(s)*i, abs(s)*i);
  }
}
