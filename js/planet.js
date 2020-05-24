(function(){
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  var planet1 = document.getElementById('1');
  var planets = document.querySelectorAll('.planet');
  // var planet1_position = planet1.getBoundingClientRect();

  // var planet1_center_X = planet1_position.left;
  // var planet1_center_Y = planet1_position.top;
  // console.log(planet1_center_X);
  // console.log(planet1_center_Y);

  // planet1_position = planet1.getBoundingClientRect();
  // planet1_center_X = planet1_position.left + (planet1_position.width / 2);
  // planet1_center_Y = planet1_position.top + (planet1_position.height / 2);

  // planet1.style.left = ww/2 - (planet1_position.width / 2);
  // planet1.style.top = wh/2 - (planet1_position.height / 2);



  let start = Date.now(); // 開始時間を覚える

  let timer = setInterval(function() {
    // 開始からの経過時間は？
    let timePassed = Date.now() - start;
    // if (timePassed >= 10000) {
    //   clearInterval(timer); // 2秒後にアニメーションが終了
    //   return;
    // }

    // timePassed 時点のアニメーションを描画
    draw(timePassed);
  }, 20);

  // timePassed は 0 から 2000 まで進む
  // なので、left は 0px から 400px になります
  function draw(timePassed) {

    planet1_position = planet1.getBoundingClientRect();
    // planet1_center_X = planet1_position.left + (planet1_position.width / 2);
    // planet1_center_Y = planet1_position.top + (planet1_position.height / 2);
    // console.log(planet1_center_X);
    // console.log(planet1_center_Y);
    



    var speed = 5000;
    var radius = 200;
    var radians = timePassed / speed;

    // planet1.style.left = (
    //     getCircleX(radians, radius)
    //     + (ww / 2)
    //     - (planet1_position.width / 2)
    //   ) 
    //   + 'px';
    // planet1.style.top = (
    //     getCircleY(radians, radius)
    //     + (wh / 2)
    //     - (planet1_position.height / 2)
    //   )
    //   + 'px';

      for (i=0; i<planets.length; i++) {
        // planets[i].style.display = 'block';
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
        radians += timePassed / 5000;
      }

    // console.log(planet1.style.left);
    // console.log(planet1.style.top);
  }

  function getCircleX(radians, radius) {
    return Math.sin(radians) * radius;
  }
  function getCircleY(radians, radius) {
    return Math.cos(radians) * radius;
  }
  

  // console.log('x:'+planet1X+' y:'+planet1Y);

})();
