window.addEventListener("load", init);
function init() {
  // set window's size
  const meguru_width = 250;
  const meguru_height = 250;

  // create a renderer
  const meguru_renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#meguru"),
    antialias: true,
  });
  meguru_renderer.setSize(meguru_width, meguru_height);
  meguru_renderer.setClearColor(0xffffff, 1.0);
  meguru_renderer.gammaInput = true;
  meguru_renderer.gammaOutput = true;

  // create a scene
  const meguru_scene = new THREE.Scene({});

  // create a camera and set it
  const meguru_camera = new THREE.PerspectiveCamera(
    50,
    meguru_width / meguru_height,
    1,
    100
  );
  meguru_camera.position.set(0, 2.6, 3.7);

  // create a environment_light and set it
  const meguru_light = new THREE.AmbientLight(0xffffff, 1.0);
  meguru_scene.add(meguru_light);

  // gltf形式の３Dモデル（Blender）の読み込み
  // urlはhttp通信
  const meguru_gltf_loader = new THREE.GLTFLoader();
  const url = "3d-models/meguru.gltf";
  meguru_gltf_loader.load(url, (gltf) => {
    meguru_scene.add(gltf.scene);
  });

  // OrbitControls の追加
  const meguru_controls = new THREE.OrbitControls(
    meguru_camera,
    meguru_renderer.domElement
  );
  meguru_controls.autoRotate = true;
  meguru_controls.autoRotateSpeed = 1.0;

  // create a cosmos

  //描画領域を変数に格納
  const cosmos_width = window.innerWidth;
  const cosmos_height = window.innerHeight;
  let rot = 0;

  //sceneを作成
  const cosmos_scene = new THREE.Scene();

  //cameraを作成
  const cosmos_camera = new THREE.PerspectiveCamera(
    45,
    cosmos_width / cosmos_height,
    1,
    2000
  );
  cosmos_camera.position.set(0, 0, 1000);

  starField();
  function starField() {
    const geometry = new THREE.Geometry();
    const SIZE = 3000;
    const LENGTH = 20000;
    for (let i = 0; i < LENGTH; i++) {
      geometry.vertices.push(
        new THREE.Vector3(
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5)
        )
      );
    }
    const material = new THREE.PointsMaterial({
      color: "0xffffff",
      size: 5,
    });
    const mesh = new THREE.Points(geometry, material);
    cosmos_scene.add(mesh);
  }

  //レンダラーを作成
  // const cosmos_renderer = new THREE.WebGLRenderer({
  //   canvas: document.querySelector("#cosmos"),
  //   antialias: true,
  // });
  // cosmos_renderer.setPixelRatio(window.devicePixelRatio);
  // cosmos_renderer.setSize(cosmos_width, cosmos_height);

  // 画面サイズが変わった時の処理
  onResize();
  window.addEventListener("resize", onResize);
  function onResize() {
    const cosmos_width = window.innerWidth;
    const cosmos_height = window.innerHeight;

    cosmos_renderer.setPixelRatio(window.devicePixelRatio);
    cosmos_renderer.setSize(cosmos_width, cosmos_height);

    cosmos_camera.aspect = cosmos_width / cosmos_height;
    cosmos_camera.updateProjectionMatrix();
  }

  tick();

  function tick() {
    rot += 0.001;

    //アニメーション処理
    const radian = (rot * Math.PI) / 180;
    cosmos_camera.position.x = Math.sin(radian) * 2000;
    cosmos_camera.position.z = Math.cos(radian) * 1000;
    cosmos_camera.lookAt(new THREE.Vector3(0, 0, 0));

    // rendering
    meguru_renderer.render(meguru_scene, meguru_camera);
    // cosmos_renderer.render(cosmos_scene, cosmos_camera);

    meguru_controls.update();
    requestAnimationFrame(tick);
  }
}
// 参考：
// https://ryo620.org/2018/02/to-gltf-from-fbx-by-blender/
// https://note.com/tg_u_ma/n/nce30e89d6279
