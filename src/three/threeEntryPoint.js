//responsible for logic
//takes a canvas and returns an object
//MAIN

import SceneManager from './SceneManager';
export default containerElement => {
  const canvas = createCanvas(document, containerElement);
  const sceneManager = new SceneManager(canvas);

  bindEventListeners();
  render();
  function createCanvas(document, containerElement) {
    const canvas = document.createElement(‘canvas’);
    containerElement.appendChild(canvas);
    return canvas;
  }
  function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
  }


  function resizeCanvas() {
    canvas.style.width = ‘100%’;
    canvas.style.height= ‘100%’;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
    // calls the update() function of every SceneSubject contained in the SceneManager.
    // calls the render() method of the Three.js Renderer.
  }
  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
//     calls the update() function of every SceneSubject contained in the SceneManager.
// calls the render() method of the Three.js Renderer.
//called evry frame
  }
}
