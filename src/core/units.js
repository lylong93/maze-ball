// 格式化角度到弧度
export let _format = angle => {
  return ((2 * Math.PI) / 360) * angle;
};
// 格式化弧度到角度
export let _rformat = radian => {
  // return ((2 * Math.PI) / 360) * angle;
  return radian / ((2 * Math.PI) / 360);
};