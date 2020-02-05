
const vs = `
attribute vec4 position;

varying vec2 v_texcoord;

void main() {
  gl_Position = position;
  v_texcoord = position.xy * .4 + .5;
}
`

const fs1 = `
precision mediump float;

uniform float time;
uniform sampler2D tex;

varying vec2 v_texcoord;

float upDown(float v) {
  return sin(v) * .5 + .5;
}

void main() {
  float t1 = time;
  float t2 = time * 0.37;

  float v = v_texcoord.y;

  float off1 = sin((v + 0.5) * mix(1., 6., upDown(t1))) * .2;
  float off2 = sin((v + 0.5) * mix(1., 3., upDown(t2))) * .2;
  float off = off1 + off2;

  vec2 uv = vec2(
     v_texcoord.x,
     1. - (v + off));

  gl_FragColor = texture2D(tex, uv);
}
`

var gl = document.querySelector("canvas").getContext("webgl");
var programInfo1 = twgl.createProgramInfo(gl, [vs, fs1]);
var bufferInfo = twgl.createBufferInfoFromArrays(gl, {
  position: {
    numComponents: 2,
    data: [
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ],
  },
});

var texture = twgl.createTexture(gl, {
  src: "https://photo-cdn.icons8.com/assets/previews/537/21a3858e-d5c9-4c64-a9f7-fe373d1198ad1x.jpg",
  crossOrigin: '',
});

var uniforms = {
  tex: texture,
  time: 0,
};

function render(time) {
  uniforms.time = time * 0.001;

  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.useProgram(programInfo1.program);

  twgl.setBuffersAndAttributes(gl, programInfo1, bufferInfo);
  twgl.setUniforms(programInfo1, uniforms);
  twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
