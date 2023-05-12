function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelo_listo);
}
function modelo_listo(){
  console.log("el modelo esta listo");
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,resultados);
}
var objetoanterior="";
function resultados(error,datos){
if(error){
  console.error(error);
}
if((datos[0].confidence>0.5)&&(objetoanterior!=datos[0].label)){
  console.log(datos);
  objetoanterior=datos[0].label;
  document.getElementById("objeto").innerHTML=datos[0].label;
  document.getElementById("seguridad").innerHTML=datos[0].confidence.toFixed(2)
}
}