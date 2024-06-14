song1 = ""
song2 = ""

RightWristX = 0
RightWristY = 0

LeftWristX = 0
LeftWristY = 0

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {

canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
if(results.length > 0)
{
console.log(results);

RightWristX = results[0].pose.rightWrist.x;
RightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + RightWristX + " rightWristY = "+ RightWristY)

LeftWristX = results[0].pose.leftWrist.x;
LeftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + LeftWristX + " leftWristY = "+ LeftWristY)
}
}




function draw() {
    image(video, 0, 0, 600, 500);
}

function play() 
{
    song.play();
    song.setVolume(0.78);
    song.rate(2);
}
