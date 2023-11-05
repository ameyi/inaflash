function preload(){

}
function setup(){
    video = createCapture(VIDEO)
    video.size(550, 550)

    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('#00FFFF')
}
function modelLoaded(){
    console.log("model has been loaded successfully")
}
function gotPoses(results){        
    if(results.length > 0){
        console.log(results)
    }
}