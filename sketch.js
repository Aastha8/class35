var hball,database;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);


    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";

    var hballREf = database.ref('ball/position');
    hballREf.on("value", readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    hball.x = position.x;
    hball.y = position.y;
}
function showError(){
    console.log("Error");

}

function writePosition(x, y){

    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y,
    })
}
