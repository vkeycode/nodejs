const circleArea = (r) => {
  const area = Math.PI * Math.pow(r, 2);
  return area;
};

const circleCircumference = (r) => {
  const circumference = 2 * Math.PI * r;
  return circumference;
};

module.exports = { circleArea, circleCircumference };
