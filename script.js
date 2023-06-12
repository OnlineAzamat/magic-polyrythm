const paper = document.getElementById('paper'),
      pen = paper.getContext("2d");

const draw = () => {
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9
  }
  
  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9
  }
  
  pen.strokeStyle = "white";
  pen.lineWidth = 6;
  
  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();
  
  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.9
  }
  
  const length = end.x - start.x,
        initialArcRadius = length * 0.05;
        
  // const colors = [
  //   "#D0E7F5",
  //   "#D9E7F4",
  //   "#D6E3F4",
  //   "#BCDFF5",
  //   "#B7D9F4",
  //   "#C3D4F0",
  //   "#9DC1F3",
  //   "#9AA9F4",
  //   "#8D83EF",
  //   "#AE69F0",
  //   "#D46FF1",
  //   "#DB5AE7",
  //   "#D911DA",
  //   "#D601CB",
  //   "#E713BF",
  //   "#F24CAE",
  //   "#FB79AB",
  //   "#FFB6C1",
  //   "#FED2CF",
  //   "#FDDFD5",
  //   "#FEDCD1"
  // ];
  const colors = Array(21).fill("#A6C48A");

  const spacing = (length / 2 - initialArcRadius) / colors.length;

  colors.forEach((arc, index) => {
    const arcRadius = initialArcRadius + (index * spacing);
    // Draw arc
    pen.beginPath();
    pen.strokeStyle = arc;
    pen.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI);
    pen.stroke();
    // Draw circle
  })

  // Draw arc
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.05, Math.PI, 2 * Math.PI);
  pen.stroke();

  const oneFullLoop = 2 * Math.PI,
        velocity = 0.5 - (index * 0.003),
        maxAngle = 2 * Math.PI,
        distance = Math.PI + (elapsedTime * velocity),
        modDistance = distance % maxAngle,
        adjustDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;
        // arcRadius = length * 0.05;

  const x = center.x + arcRadius * Math.cos(adjustDistance),
        y = center.y + arcRadius * Math.sin(adjustDistance);
  
  // Draw circle
  pen.beginPath();
  pen.arc(x, y, length * 0.0065, 0, 2 * Math.PI);
  pen.fill();

  let startTime = new Date().getTime();

  const currentTime = new Date().getTime(),
        elapsedTime = (currentTime - startTime) / 1000;

}

draw()