//device
let device = () => {
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      lister,
      false
    );
  } else {
    document.querySelector("body").innerHTML = "你的浏览器不支持陀螺仪";
  }
};

let lister= (event)=> {
    var a = document.getElementById("alpha"),
    b = document.getElementById("beta"),
    g = document.getElementById("gamma"),
    alpha = event.alpha,
    beta = event.beta,
    gamma = event.gamma;

  a.innerHTML = Math.round(alpha);
  b.innerHTML = Math.round(beta);
  g.innerHTML = Math.round(gamma);
}