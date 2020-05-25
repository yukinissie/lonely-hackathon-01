var planetTimer;
(function() {
  var ww = window.innerWidth;
  var wh = window.innerHeight;

  // var planet = document.querySelectorAll('.planet');

  // console.log(planet);

  // var maxPlanetLength = 5;
  // var baseNumber = parseInt(planet.length / maxPlanetLength);

  // if((planet.length % maxPlanetLength) != 0) {
  //   baseNumber += 1;
  // }

  // console.log(baseNumber);
  // console.log(planet[0]);
  

  // var planets = {
  //   length: 0,

  //   addElem: function addElem (elem) {
  //     [].push.call(this, elem);
  //   }
  // };
  // for(var i=0; i<baseNumber; i++) {
  //   for(var j=0; j<planet.length; j++) {
  //     planets.addElem(planet[i]);
  //     count++;
  //   }
  // }


  // planets.addElem(planet[0]);
  // planets.addElem(planet[1]);

  // console.log(planets.length);
  // console.log(planets[0].getBoundingClientRect());
  var planets = document.querySelectorAll('.planet');
  var planet1 = planets[0];
  var planet6 = planets[5];
  var planet11 = planets[10];
  var planet16 = planets[15];


  


  let startTime = Date.now();
  planetTimer = setInterval(function() {
    let passedTime = Date.now() - startTime;
    draw(passedTime);
  }, 20);

  function draw(passedTime) {
    var base_planet_position = planet1.getBoundingClientRect();


    var mainRevolutionSpeed = 100000;
    var subRevolutionSpeed = 100000;
    var radius = 200;
    var radians = passedTime / mainRevolutionSpeed;
    var tmpRadius;
    var tmpRadians;
    var unique = 0;
    for (i=0; i<planets.length; i++) {
      if(i%5==0 && i==0){
        tmpRadians = radians;
      } else if(i%5==0) {
        radians = tmpRadians;
        radius = 200;
        unique += 120;
        tmpRadians = radians;
      }


      move(base_planet_position);
      function move(base_planet_position){
        planets[i].style.left = (
          getCircleX(radians + unique, radius)
          + (ww / 2)
          - (base_planet_position.width / 2)
        ) 
        + 'px';
        planets[i].style.top = (
          getCircleY(radians + unique, radius)
          + (wh / 2)
          - (base_planet_position.height / 2)
        )
        + 'px';
      }
      radius += 120;
      radians += passedTime / subRevolutionSpeed;

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
  }

  const stop = document.getElementById('stop');
  const start =  document.getElementById('start');
  stop.addEventListener('click', event => {
    stop.classList.remove("enable");
    stop.classList.add("disable");
    start.classList.remove("disable");
    start.classList.add("enable");

    clearInterval(planetTimer);
  });
  start.addEventListener('click', event => {
    planetTimer = setInterval(function() {
      start.classList.remove("enable");
      start.classList.add("disable");
      stop.classList.remove("disable");
      stop.classList.add("enable");

      passedTime = Date.now() - startTime;

      draw(passedTime);
    }, 20);
  });

  
  
})();
