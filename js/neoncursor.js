import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('neoncursor'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})

/*
var space_app = window.setInterval(function(){
    let c = document.getElementById("content").clientHeight;
    let style = 'height: ' + c + 'px; display: block;';
    document.getElementsByTagName("canvas")[0].setAttribute("style", style);
    document.getElementsByTagName("canvas")[0].setAttribute("height", c);
}, 50);
*/