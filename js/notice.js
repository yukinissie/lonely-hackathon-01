(function () {
  var notice = document.getElementById('notice');
  var planets = document.querySelectorAll('.planet');
  for (i = 0; i < planets.length; i++) {
    planets[i].style.display = 'block';
  }
  notice.style.display = 'none';
})();
