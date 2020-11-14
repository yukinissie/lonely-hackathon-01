var modanTechs;
var linkType = 'document';
(function () {
  var jsonURL = '../data/modan_tech.json';
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  // request.onreadystatechange = function(){handleHttpResponse(request)};
  request.send();

  request.onload = function () {
    modanTechs = request.response;
    renderImage(modanTechs);
    atachLink(modanTechs);
  };
  function renderImage(jsonObj) {
    var planet;
    for (var i = 0; i < jsonObj[linkType].length; i++) {
      planet = document.getElementById(jsonObj[linkType][i]['id']);
      techImage = document.createElement('img');
      techImage.src = 'data/' + jsonObj[linkType][i]['image'];
      planet.appendChild(techImage);
    }
  }
  function atachLink(jsonObj) {
    var planet;
    for (var i = 0; i < jsonObj[linkType].length; i++) {
      planet = document.getElementById(jsonObj[linkType][i]['id']);
      planet.appendChild(techImage);
    }
  }
})();
