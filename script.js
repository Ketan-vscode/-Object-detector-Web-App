status = "";
results = [];

 function preload(){
    img = loadImage("");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status ; Detecting Objects";
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    
    if(status != "")
    {
        for(i = 0; i< objects.length; i++){
            percent = floor(objects[i].confidence *100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}