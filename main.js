function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=careateCapture(VIDEO);
    video.hide();
    var posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
    video.size(300,300);
}
function modelLoaded(){
    console.log("posenet has started");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
}
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
save("My selfie.png");


}
