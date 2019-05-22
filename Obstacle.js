function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    movable(x, y);
    map();
    console.clear();
    for(let i = 0; i < 8; i++) {
      hit(x, y, x - 30, y - 20, posLines[i][0], posLines[i][1], posLines[i][2], posLines[i][3]);
      hit(x, y, x + 30, y - 20, posLines[i][0], posLines[i][1], posLines[i][2], posLines[i][3]);
      hit(x, y, x - 15, y - 35, posLines[i][0], posLines[i][1], posLines[i][2], posLines[i][3]);
      hit(x, y, x + 10, y - 35, posLines[i][0], posLines[i][1], posLines[i][2], posLines[i][3]);
    }
  }

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  function sensor(x, y) {
    ctx.moveTo(x, y);
    ctx.lineTo(x - 30, y - 20);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y - 20);
    ctx.moveTo(x, y);
    ctx.lineTo(x - 15, y - 35);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 35);
    ctx.stroke();
  }

  function movable(x, y) {
    ctx.clearRect(0, 0, 800, 400);
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(x - 10, y - 10, 20, 20);
    sensor(x, y);
  }

  function hit(x1, y1, x2, y2, x3, y3, x4, y4) {
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return;
    }
    const t1 = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    if(t1 > 0 && t1 < 1) {
      console.log(1 - t1);
    }
  }

  var posLines = [
    [90, 350, 90, 300],
    [150, 350, 150, 300],
    [90, 300, 50, 250],
    [150, 300, 110, 250],
    [50, 250, 50, 50],
    [110, 250, 110, 100],
    [50, 50, 200, 50],
    [110, 100, 160, 100]
  ];
  function map() {

  for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(posLines[i][0], posLines[i][1]);
      ctx.lineTo(posLines[i][2], posLines[i][3]);
      ctx.stroke();
    }
  }
