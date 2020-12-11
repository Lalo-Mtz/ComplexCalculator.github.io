let x=0, y=0;
let l=5, k=5;
let j=10, h=10; 
let x1=0, y1=0;

function setup(){
    let cv = createCanvas(450,410);
    cv.position(10,430);
}


function draw(){
    clear();
    stroke('black');
    strokeWeight(1);
    noSmooth();
    noFill();

    o = Math.abs(x);
    p = Math.abs(y);

    if(o > 100000 || p > 100000){
        x = y = 0;
        x1 = y1 = 0;
    }else{
        if(o>10000){
            l = 50000;
            j = 100000;
            x1 = x/10000;
        }else if(o>1000){
            l = 5000;
            j = 10000;
            x1 = x/1000;
        }else if(o>100){
            l = 500;
            j = 1000;
            x1 = x/100;
        }else if(o>10){
            l = 50;
            j = 100;
            x1 = x/10;
        }else if(o>0){
            l = 5;
            j = 10;
            x1 = x;
        }
    
        if(p>10000){
            k = 50000;
            h = 100000;
            y1 = y/10000;
        }else if(p>1000){
            k = 5000;
            h = 10000;
            y1 = y/1000;
        }else if(p>100){
            k = 500;
            h = 1000;
            y1 = y/100;
        }else if(p>10){
            k = 50;
            h = 100;
            y1 = y/10;
        }else if(p>0){
            k = 5;
            h = 10;
            y1 = y;
        }
    }
    
    clear();
    text(`${l}`, ((10+5)*20)+22, 215, 80, 80);
    text(`- ${l}`, ((10-5)*20)+15, 215, 80, 80);

    text(`${j}`, ((10+10)*20)+19, 215, 80, 80);
    text(`- ${j}`, ((10-10)*20)+10, 215, 80, 80);

    text(`${k}`, ((10)*20)+5, 95, 80, 80);
    text(`- ${k}`, ((10)*20), 295, 80, 80);

    text(`${h}`, ((10)*20), 0, 80, 80);
    text(`- ${h}`, ((10)*20)-5, 390, 80, 80);


    line(225, 0, 225, 400);
    line(25, 200, 425, 200);
    
    for(var i=0; i<=20; i++){
        line((20*i)+25,205, (20*i)+25, 195);

        line((210)+20, 20*i, (190)+30, 20*i);
    }

    
    line((210)+25, 0, (190)+25, 0);

    
    line(225, 200, ((10+x1)*20)+25, ((10-y1)*20));

    stroke('blue');
    line(((10+x1)*20)+25, 200, ((10+x1)*20)+25, ((10-y1)*20));

    line((10*20)+25, ((10-y1)*20), ((10+x1)*20)+25, ((10-y1)*20));

    stroke('green');
    if(x1<0 && y1<0)
        arc(225, 200, 120, 120, -Math.atan(y1/x1)+Math.PI, Math.PI*2);
    else if(x1<0 && y1>0)
        arc(225, 200, 120, 120, -Math.atan(y1/x1)-Math.PI, Math.PI*2);
    else
        arc(225, 200, 120, 120, -Math.atan(y1/x1), Math.PI*2);
    

    stroke('red');
    strokeWeight(10);
    point(((10+x1)*20)+25, ((10-y1)*20));

}