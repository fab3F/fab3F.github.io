let width = screen.width;
    let r = 100;
    if(width < 800){
      r = (r/800) * width;
    }

    import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

    neonCursor({
      el: document.getElementById('neoncursor'),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: r,
      sleepRadiusY: r,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    })