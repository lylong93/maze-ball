import printMe from './print.js';

printMe();
function draw() {
    let canvas = document.querySelector('#world');
    if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(75,75,70,0,Math.PI*2,true);
    ctx.stroke();
    }
   }
   draw()