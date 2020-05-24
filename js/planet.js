(function() {
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  var planet1 = document.getElementById('1');
  var planets = document.querySelectorAll('.planet');

  let start = Date.now(); // 開始時間を覚える

  setInterval(function() {
    // 開始からの経過時間は？
    let timePassed = Date.now() - start;
    // timePassed 時点のアニメーションを描画
    draw(timePassed);
  }, 20);

  function draw(timePassed) {
    var planet1_position = planet1.getBoundingClientRect();

    var speed = 5000;
    var radius = 200;
    var radians = timePassed / speed;

    for (i=0; i<planets.length; i++) {
      planets[i].style.left = (
        getCircleX(radians, radius)
        + (ww / 2)
        - (planet1_position.width / 2)
      ) 
      + 'px';
      planets[i].style.top = (
        getCircleY(radians, radius)
        + (wh / 2)
        - (planet1_position.height / 2)
      )
      + 'px';
      radius += 100;
      radians += timePassed / 50000;
    }
  }

  function getCircleX(radians, radius) {
    return Math.sin(radians) * radius;
  }
  function getCircleY(radians, radius) {
    return Math.cos(radians) * radius;
  }

  // 画面サイズが変わった時の処理
  onResize();
  window.addEventListener('resize', onResize);
  function onResize() {
    ww = window.innerWidth;
    wh = window.innerHeight;
    planet1 = document.getElementById('1');
    planets = document.querySelectorAll('.planet');
  }
})();
