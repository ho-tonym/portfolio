var vs = `
attribute vec4 position;

varying vec2 v_texcoord;

void main() {
  gl_Position = position;
  v_texcoord = position.xy * .4 + .5;
}
`;

var fs1 = `
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
`;

var fs2 = `
precision mediump float;

uniform float time;
uniform sampler2D tex;

varying vec2 v_texcoord;

float upDown(float v) {
  return sin(v) * .5 + .5;
}

#define PI radians(180.)

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}

float bounce(float v) {
  v = fract(v * .2);
  return mix(v, 2. - v, step(1., v));
}

void main() {
  float t1 = time;
  float t2 = time * 0.37;
  float t3 = time * 0.1;
  float t4 = time * 1.23;

  vec2 tc = rot(time * 0.1) * (v_texcoord - 0.25) ;
  vec2 xy = fract(tc * mix(.5, 3., upDown(t4))) * 2. - 1.;
  float a  = fract(abs(atan(xy.x, xy.y)) / PI + t3);
  float r  = bounce(length(xy) + t1);

  r = pow(r, mix(0.2, 1., upDown(t2)));

  vec2 uv = vec2(a, r);

  gl_FragColor = texture2D(tex, uv);
}
`;

var gl = document.querySelector("canvas").getContext("webgl");
var programInfo1 = twgl.createProgramInfo(gl, [vs, fs1]);
var programInfo2 = twgl.createProgramInfo(gl, [vs, fs2]);
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

var programIndex = 0;
var programInfos = [
  programInfo1,
  programInfo2,
];

function nextProgram() {
  programIndex = (programIndex + 1) % programInfos.length;
}
window.addEventListener('keydown', nextProgram);
window.addEventListener('mousedown', nextProgram);
window.addEventListener('touchstart', nextProgram);


function render(time) {
  uniforms.time = time * 0.001;

  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  var programInfo = programInfos[programIndex];
  gl.useProgram(programInfo.program);

  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, gl.TRIANGLES, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
