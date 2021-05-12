var ball;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //read the values from the databse
    dataBase.ref("ball/position").on("value",function(data){
        var pos = data.val();
        ball.x = pos.x;
        ball.y = pos.y;
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
}

//writing the values to the database
function changePosition(x,y){
   dataBase.ref("ball/position").set({x:ball.x+x,y:ball.y+y})
}
