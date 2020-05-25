(function(){
  var jsonURL = '../data/modan_tech.json';
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var modanTechs = request.response;
    renderImage(modanTechs);
    showHeroes(modanTechs);
  }

  function renderImage(jsonObj) {
    var planet;
    for(var i=0; i<jsonObj.length; i++) {
      planet = document.getElementById(jsonObj[i]['id']);
      var techImage = document.createElement('img'); 
      techImage.src = "data/" + jsonObj[i]['image']; 
      planet.appendChild(techImage);
    }
  }

})();