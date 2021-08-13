var disp = "";
var opr = "";

//function to clear the screen
function clear(e) {
    disp = "";
    document.getElementById('res').innerHTML = disp;
}

//function to display pressed buttons and record them for calculations
function show(e) {
    var btn = e.target || e.srcElement;
    x = document.getElementById(btn.id).innerHTML;
    if (x == '+' || x == '-' || x == '*' || x == '/') {
        opr = x;
    }
    disp = disp + x;
    document.getElementById('res').innerHTML = disp;
}

function answer() {
    const str = disp.split(opr);
    a = parseInt(str[0], 2);
    b = parseInt(str[1], 2);

    if (opr == '+') {
        disp = (a + b).toString(2);
    } else if (opr == '-') {
        disp = (a - b).toString(2);
    } else if (opr == '*') {
        disp = (a * b).toString(2);
    } else {
        disp = (a / b).toString(2);
    }

    document.getElementById('res').innerHTML = disp;
}

console.log('hiiiii')
document.getElementById('btn0').onclick = show;
document.getElementById('btn1').onclick = show;
document.getElementById('btnClr').onclick = clear;
document.getElementById('btnEql').onclick = answer;
document.getElementById('btnSum').onclick = show;
document.getElementById('btnSub').onclick = show;
document.getElementById('btnMul').onclick = show;
document.getElementById('btnDiv').onclick = show;