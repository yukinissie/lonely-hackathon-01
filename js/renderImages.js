var modanTechs;
var linkType = "document";
(function(){
  var jsonURL = '../data/modan_tech.json';
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  // request.onreadystatechange = function(){handleHttpResponse(request)};
  request.send();

  // function handleHttpResponse(http)
  // {
  //     if (http.readyState == 4)
  //     {
  //         if(http.status == 200)
  //         {
  //           request.onload = function() {
  //             var modanTechs = request.response;
  //             renderImage(modanTechs);
  //           }
  //         }
  //         else{

  //           // エラー処理
  //         }
  //     }
  // }


  // request.onload = function() {
  //   var modanTechs = request.response;
  //   renderImage(modanTechs);
  // }
  request.onload = function() {
    modanTechs = request.response;
    renderImage(modanTechs);
    atachLink(modanTechs);
  }
  function renderImage(jsonObj) {
    var planet;
    for(var i=0; i<jsonObj[linkType].length; i++) {
      planet = document.getElementById(jsonObj[linkType][i]['id']);
      techImage = document.createElement('img'); 
      techImage.src = "data/" + jsonObj[linkType][i]['image']; 
      planet.appendChild(techImage);
    }
  }
  function atachLink(jsonObj) {
    var planet;
    for(var i=0; i<jsonObj[linkType].length; i++) {
      planet = document.getElementById(jsonObj[linkType][i]['id']);
      planet.appendChild(techImage);
    }
  }
})();