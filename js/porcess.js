const real1 = document.getElementById('real1'),
    img1 = document.getElementById('imaginary1'),
    real2 = document.getElementById('real2'),
    img2 = document.getElementById('imaginary2'),
    real3 = document.getElementById('real3'),
    img3 = document.getElementById('imaginary3'),
    magnitud = document.getElementById('magnitud'),
    angle = document.getElementById('angle');


const add = document.getElementById('add'),
    subtract = document.getElementById('subtract'),
    multiply = document.getElementById('multiply'),
    divide = document.getElementById('divide'),
    rtp = document.getElementById('rtp'),
    ptr = document.getElementById('ptr');

const getValues = () =>{
    r1 = (real1.value == "") ? 0 : parseFloat(real1.value);
    r2 = (real2.value == "") ? 0 : parseFloat(real2.value);
    i1 = (img1.value == "") ? 0 : parseFloat(img1.value);
    i2 = (img2.value == "") ? 0 : parseFloat(img2.value);
}

const pushValues = (r3,i3) =>{
    real3.value = x = r3;
    img3.value = y = i3;
    clear();
}

add.addEventListener('click', e =>{
    getValues();
    pushValues(r1 + r2, i1 + i2);
});

subtract.addEventListener('click', e =>{
    getValues();
    pushValues(r1 - r2, i1 - i2);
});

multiply.addEventListener('click', e =>{
    getValues();
    r3 = (r1*r2) - (i1*i2);
    i3 = (r1*i2) + (r2*i1);
    pushValues(r3, i3);
});

divide.addEventListener('click', e =>{
    getValues();
    r3 = (r1*r2 + i1*i2)/(r2*r2 + i2*i2);
    i3 = ((-r1)*i2 + i1*r2)/(r2*r2 + i2*i2);
    
    r3 = (isNaN(r3)) ? 0 : r3;
    i3 = (isNaN(i3)) ? 0 : i3;
    pushValues(r3, i3);
});

const getValuesRTP = () =>{
    r = (real3.value == "") ? 0 : parseFloat(real3.value);
    i = (img3.value == "") ? 0 : parseFloat(img3.value);
}

const pushValuesRTP = (m, a) =>{
    magnitud.value = m;
    angle.value = a; 
    x = r;
    y = i;
}

rtp.addEventListener('click', e => {
    getValuesRTP();

    m = Math.sqrt(r*r+i*i);

    a = Math.atan(i/r);
    a *= 180/Math.PI;

    if(r < 0){
        a += 180;
    }

    if(i < 0 && r > 0){
        a += 360;
    }

    a = (a>270) ? (360-a)*-1 : a;

    a = (isNaN(a)) ? 0 : a;

    pushValuesRTP(m, a, r, i);
});

const getValuesPTR = () =>{
    mag = (magnitud.value == "") ? 0 : parseFloat(magnitud.value);
    ang = (angle.value == "") ? 0 : parseFloat(angle.value);
}

ptr.addEventListener('click', e => {
    getValuesPTR();

    real = mag*Math.cos(ang*Math.PI/180);
    imaginary = mag*Math.sin(ang*Math.PI/180);

    pushValues(real, imaginary);
});
