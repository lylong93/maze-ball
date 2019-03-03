import draw from './draw'
import Wall from './wall';
import Ball from './ball';

let init = (world) => {
    world.setAttribute('width',window.innerWidth)
    world.setAttribute('height',window.innerWidth)
    world.style.background = 'rgb(192,192,192)';

    let oReact = world.getBoundingClientRect()
    // console.log(oReact)


    let {x,y,width,height} = oReact

    let walls =[]
    walls.push(new Wall(width/2,height/2,height/3)) 
    // walls.push(new Wall(width/2,height/2,height/3.3)) 
    // walls.push(new Wall(width/2,height/2,height/2.5)) 
    // walls.push(new Wall(width/2,height/2,height/2.1)) 

    let ball = new Ball(104,height/2,30)
    // draw(walls,ball)
    let animation =() =>  {
        draw(walls,ball)
        window.requestAnimationFrame(animation);
    }
    
    window.requestAnimationFrame(animation);
}

// let animation =() =>  {
//     draw(walls,ball)
//     window.requestAnimationFrame(animation);
// }

export default init