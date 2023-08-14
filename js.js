

// Creat holst
h = document.getElementsByClassName('canva')[0].getContext('2d');

// Creat the coordinates and spd of the snake
x_snake = 10;
y_snake = 10;
spd = 2;

// Сreating random coordinates at a point
x_point = Math.floor(Math.random() * 750);
y_point = Math.floor(Math.random() * 750);

// Snake speed counter
document.getElementsByClassName('score')[0].innerHTML = "Score : " + spd;

function p(e){
    // Snake Movement
    if(e.keyCode == "37"){
        x_snake -= spd;
    }if(e.keyCode == "38"){
        y_snake -= spd;
    }if(e.keyCode == "39"){
        x_snake += spd;
    }if(e.keyCode == "40"){
        y_snake += spd;
    }
    // Random appearance of a dot
    if(h.isPointInPath(x_point, y_point) == true){
        spd++;

        x_point = Math.floor(Math.random() * 750);
        y_point = Math.floor(Math.random() * 750);

        h.rect(x_point, y_point, 20, 20);
    }

    // Defeat condition
    if(x_snake > 880 || x_snake < 0 || y_snake > 880 || y_snake < 0){
        alert("You have lost :(");
        h.clearRect(x_snake, y_snake, 900, 900);
        spd = 2;
        x_snake = 0;
        y_snake = 0;
        h.beginPath();
        h.rect(x_snake, y_snake, 50,50);
        h.stroke()
    }
    
    // Cleaning when walking
    h.clearRect(0,0, 900, 900);
    
    // Creating a apple
    
    var img = new Image();
    img.src = "apple.webp";
    img.onload = function(){
        h.drawImage(img,x_point,y_point, 40, 20); 
    }
    // Creating a Snake
    h.beginPath();
    h.rect(x_snake, y_snake, 50,50);
    h.stroke()
    
    // Victory condition
    if(spd == 35){
        alert("You've won! :)")
        h.clearRect(x_snake, y_snake, 900, 900);
        spd = 2;
        x_snake = 10;
        y_snake = 10;
        h.beginPath();
        h.rect(x_snake, y_snake, 50,50);
        h.stroke()
    }
    // Speed counter
    document.getElementsByClassName('score')[0].innerHTML = "Score : " + spd;

}
