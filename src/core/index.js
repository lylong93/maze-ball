import draw from "./draw";
import Wall from "./wall";
import Ball from "./ball";

let init = world => {
  if (world.getContext) {
    let ctx = world.getContext("2d");

    world.setAttribute("width", window.innerWidth);
    world.setAttribute("height", window.innerWidth);
    world.style.background = "rgb(192,192,192)";

    let oReact = world.getBoundingClientRect();

    let { width, height } = oReact;

    let walls = [];

    walls.push(new Wall(width / 2, height / 2, height / 10, 150, 220));
    walls.push(new Wall(width / 2, height / 2, height / 3, 300, 360));

    let ball = new Ball(130, height / 2, 10);
    let center = {
      x: width / 2,
      y: height / 2
    };
    ball.getCenterDistance(center);
    // 圆心
    let animation = () => {
      draw(world, walls, ball);
      window.requestAnimationFrame(animation);
    };
    window.requestAnimationFrame(animation);
  } else {
    alert("不支持");
  }
};

export default init;
