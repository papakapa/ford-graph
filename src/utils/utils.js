const getPath = (prevVertices, excepted, pathLength) => {
  const [speed, height] = excepted.split(',');
  let prevValue = excepted;
  const path = [{ name: excepted, x: speed, y: height }];
  for (let i = 0; i < pathLength; i++) {
    prevValue = prevVertices[prevValue].value;
    const [prevSpeed, prevHeight] = prevValue.split(',');
    path.push({ name: prevValue, x: prevSpeed, y: prevHeight});
  }

  return path.reverse();
};

export { getPath };
