import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
neonCursor({
    el: document.getElementById('content'),
    shaderPoints: 16,
    curvePoints: 60,
    curveLerp: 0.6,
    radius1: 7,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
})

var space_app = window.setInterval(function(){
    let c = document.getElementById("content").clientHeight;
    let style = 'min-height: ' + c + 'px; display: block;';
    document.getElementsByTagName("canvas").setAttribute("style", style);
}, 50);