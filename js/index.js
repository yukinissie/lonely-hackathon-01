window.addEventListener('load', init);
function init() {
    
  // set window's size
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#meguru'),
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff, 1.0);
  renderer.gammaOutput = true;

  // create a scene
  const scene = new THREE.Scene({});

  // create a camera and set it
  const camera = new THREE.PerspectiveCamera(50, width / height, 1, 100);
  camera.position.set(0, 6, 10);

  // create a environment_light and set it
  const light = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(light);
  
  // gltf形式の３Dモデル（Blender）の読み込み
  // urlにはhttp通信が必要
  var meguruCube;
  var meguruRotare;
  // var meguruRotareY;
  const meguruCubeLoader = new THREE.GLTFLoader();
  const url = '3d-models/meguru.gltf';
  meguruCubeLoader.load(url, (gltf) => {
    meguruCube = gltf.asset
    meguruRotare = meguruCube.rotation;
    scene.add(gltf.scene);
  });
  
  // create a grip
  // const grid = new THREE.GridHelper(10, 5);
  // scene.add(grid);

  // create a sphere
  // const sphere = new THREE.Mesh( 
  //   new THREE.SphereGeometry(0.1), 
  //   new THREE.MeshPhongMaterial({ color: 0x0074df })
  // );
  // sphere.position.set(0, 0, 0);
  // scene.add(sphere);
  
  // OrbitControls の追加
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.userPan = false;
  // controls.userPanSpeed = 0.0;
  // controls.maxDistance = 5000.0;
  // controls.maxPolarAngle = Math.PI * 0.495;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 15.0;
  
  tick();

  function tick() {
    // meguruCube.rotation = meguruCube.meguruRotare;
    // rendering
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(tick);
  }
  
  
  
  // 参考：https://ryo620.org/2018/02/to-gltf-from-fbx-by-blender/
}