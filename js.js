h = document.getElementsByClassName('canva')[0].getContext('2d');
x = 0;
y = 0;
c = 2;

x1 = Math.floor(Math.random() * 800);
y1 = Math.floor(Math.random() * 800);
document.getElementsByClassName('score')[0].innerHTML = c;

function p(e){
    
    

    
   

    if(e.keyCode == "37"){
        x-= c;
    }if(e.keyCode == "38"){
        y-= c;
    }if(e.keyCode == "39"){
        x+= c;
    }if(e.keyCode == "40"){
        y+= c;
    }
    if(h.isPointInPath(x1,y1) == true){
        c++;
        x1 = Math.floor(Math.random() * 800);
        y1 = Math.floor(Math.random() * 800);

        h.rect(x1, y1, 5,5);
        
    }
    if(x > 880 || x < 0 || y > 880 || y < 0){
        alert("Вы проиграли");
        h.clearRect(x,y, 900, 900);
        c = 2;
        x = 0;
        y = 0;
        h.beginPath();
        h.rect(x, y, 50,50);
        h.stroke()
    }
    
    h.clearRect(0,0, 900, 900);
    
    h.beginPath();
    h.rect(x1, y1, 5,5);
    h.fill();

    h.beginPath();
    h.rect(x, y, 50,50);
    h.stroke()
    
    if(c == 6){
        alert('Вы победили')
        h.clearRect(x,y, 900, 900);
        c = 2;
        x = 0;
        y = 0;
        h.beginPath();
        h.rect(x, y, 50,50);
        h.stroke()
    }
    document.getElementsByClassName('score')[0].innerHTML = c;
}
