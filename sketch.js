c = "blue"
function setup(){
    createCanvas(600,600);
    fill(0,0,255);
    rect(0,0,600,600);
}
function mouseClicked(){
    if (mouseX>0 && mouseX<600 && mouseY>0 && mouseY<600){
        if (c == "blue"){
            fill(255,0,0);
            rect(0,0,600,600);
            c = "red"
        } else if (c == "red"){
            fill(0,0,255);
            rect(0,0,600,600);
            c = "blue"
        }
    }
}
function keyTyped(){
    if (key == ' '){
        if (mouseX>0 && mouseX<600 && mouseY>0 && mouseY<600){
            if (c == "blue"){
                fill(255,0,0);
                rect(0,0,600,600);
                c = "red"
            } else if (c == "red"){
                fill(0,0,255);
                rect(0,0,600,600);
                c = "blue"
            }
        }
    }
}