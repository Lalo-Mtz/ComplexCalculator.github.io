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
    r1 = parseFloat(real1.value);
    r2 = parseFloat(real2.value);
    i1 = parseFloat(img1.value);
    i2 = parseFloat(img2.value);
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
    pushValues(r3, i3);
});


