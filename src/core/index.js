import draw from "./draw";
import Wall from "./wall";
import Ball from "./ball";
import device from "./device";

let init = world => {
  if (world.getContext) {
    let ctx = world.getContext("2d");

    world.setAttribute("width", window.innerWidth);
    world.setAttribute("height", window.innerWidth);
    world.style.background = "rgb(192,192,192)";

    let oReact = world.getBoundingClientRect();

    let { width, height } = oReact;

    let walls = [];

    walls.push(new Wall(width / 2, height / 2, height / 10, 130, 220));
    // walls.push(new Wall(width / 2, height / 2, height / 6, 300, 360));
    walls.push(new Wall(width / 2, height / 2, height / 5, 180, 240));
    walls.push(new Wall(width / 2, height / 2, height / 3, 360, 360));

    let ball = new Ball(107, 170, 10);

    let center = {
      x: width / 2,
      y: height / 2
    };
  
    // 圆心
    let animation = () => {
  
      ball.getCenterDistance(center);
      draw(world, walls, ball);
      window.requestAnimationFrame(animation);
    };
    window.requestAnimationFrame(animation);
  } else {
    alert("不支持");
  }
};

export default init;
