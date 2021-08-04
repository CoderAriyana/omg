img = "";
status = "";
objects = "";

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Cat", 45, 75);
    noFill();
    stroke("AF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Dog", 320, 120);
    noFill();
    stroke("FA0000");
    rect(30, 60, 450, 350);

    if(status != " ")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : OBJECCCT DEETTECTEDD";

            fill("#FA0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y - 15);
            noFill();
            stroke("FA0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
    function preload(){
        img = loadImage('DOG.jpg');
    }

    function setup(){
        canvas = createCanvas(640, 420);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status : DETECTING OBJECTS";
    }

    function modelLoaded() {
        console.log("ModelLoaded");                   
        status = true;
        objectDetector.detect(img, gotResult);
    }

    function gotResult(error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        objects = results;

    }

