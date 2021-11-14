magic= ""
function preload(){
    magic= loadSound("Magic- 1d.mp3")
}
function setup() {
    canvas= createCanvas(300,250)
    canvas.position(950, 30)
    video= createCapture(VIDEO)
    video.hide()
}
    function draw(){
        push();
      translate(width,0);
      scale(-1, 1);
        image(video, 0, 0, 300, 250)
        pop()
}
