var s = Snap("#svg");

var cHeight = 300;
var cWidth = 750;
var hOffset = 10;

var cdata = [50, 48, 56, 40, 43, 50, 60, 40, 35, 60, 40, 25, 45, 60, 62, 48, 56, 40, 43, 50];
var cdata2 = [45, 40, 10, 50, 60, 40, 30, 70, 30, 25, 45, 85, 20, 15, 13, 40, 10, 50, 60, 40];
var repeting = cdata.length;

var interval = cWidth / (repeting + 1);

var color = ['#574a4f', '#b98ea4'];
var color2 = ['#424f55', '#72a3ad'];

s.attr({width: cWidth, height: cHeight});

function rPc(num, data) {
  var pos;
  pos = (cHeight - hOffset) - ((data[num] * (cHeight - (hOffset * 2))) / 100);
  return pos;
}

function gChart(data, colors) {
  for(i=0;i<repeting;i++) {
    // write lines
    if (i < repeting-1) {
      s.line(interval+(i*interval), rPc(i, data), interval+(i*interval)+interval, rPc(i+1, data))
      .attr({ stroke: colors[1], 'strokeWidth': 2});
    }

    // write dots
    s.circle(interval+(i*interval), rPc(i, data), 5)
    .attr({ fill: colors[0], stroke: colors[1], 'strokeWidth': 2});
  }
}

for(i=0;i<repeting;i++) {

  // write vertical grids
  s.line(interval+(i*interval), 10, interval+(i*interval), 290)
  .attr({ stroke: '#ccc', 'strokeWidth': 1, opacity: 0.8});

};

for(i=0;i<11;i++) {

  // write horizontal grids
  var hLine = s.line(10, (((cHeight - 20) / 10) * i) + 10, 730, (((cHeight - 20) / 10) * i) + 10);
  if (i === 0 || i === 5 || i === 10 ) {
    hLine.attr({ stroke: '#ccc', 'strokeWidth': 2, opacity: 1});
  } else {
    hLine.attr({ stroke: '#ccc', 'strokeWidth': 1, opacity: 0.4});
  }

    console.log((((cHeight - 20) / 10) * i) + 10);

};

gChart(cdata, color);
gChart(cdata2, color2);
