function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump= loadSound("kick.wav");
	mario_coin=loadSound("jump.wav");
	mario_gameover=loadSound("gameover.wav");
mario_kick=loadSound("mariodie.wav");
mario_die=loadSound("coin.wav");




}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("div");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("unknown_div");
	posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("posenet is intitititalized")
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("nose x  = " + result[0].pose.nose.x + " ,nose y = " + result[0].pose.nose.y);
        nx = result[0].pose.nose.x;
        ny = result[0].pose.nose.y;

    }
}




function draw() {
	game();
}













