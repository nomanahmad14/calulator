let a = 0;
let b = 0;
let res = 0;
let eqcount = false;
const add = (x, y) => {
    return x + y;
}

const sub = (x, y) => {
    return x - y;
}

const prd = (x, y) => {
    return x * y;
}

const div = (x, y) => {
    if (y != 0) {
        return x / y;
    } else {
        return NaN;
    }
}
const disp = document.querySelector('.display');
disp.innerText = ""
let nums = document.querySelectorAll('.num');

nums.forEach(num => {
    num.addEventListener('click', () => {
        if(eqcount==true){
            disp.innerText=""
            eqcount=false;
        }
        disp.innerText += num.innerText;
    })
})

const addbtn = document.getElementById('add');
const subbtn = document.getElementById('sub');
const mulbtn = document.getElementById('mul');
const divbtn = document.getElementById('div');
const eqlbtn = document.getElementById('equals')


let isFirstCalc = true;
let opereration = "";




let operators = document.querySelectorAll('.op');
operators.forEach(op => {

    op.addEventListener('click', () => {

        opereration = op.id;
        a = disp.innerText;
        disp.innerText = ""

        console.log(opereration)


    })
})

eqlbtn.addEventListener('click', () => {
    b = disp.innerText;
    a = parseFloat(a);
    b = parseFloat(b);
    if (opereration == "add") {


        res = add(a, b);


    } else if (opereration == "mul") {


        res = prd(a, b);

    } else if (opereration == "sub") {


        res = sub(a, b);

    } else if (opereration == "div") {


        res = div(a, b);

    }
    eqcount=true;
    disp.innerText = res;
    a = res;
    b = "";
    operation="";
    

})


