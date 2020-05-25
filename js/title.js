// (function(){
//     var jsonURL = '../data/modan_tech.json';
//     var request2 = new XMLHttpRequest();
//     request2.open('GET', jsonURL);
//     request2.responseType = 'json';
//     request2.onreadystatechange = function(){handleHttpResponse(request2)};
//     request2.send();

//     // request2.onload = function() {
//     //     var modanTechs = request2.response;
//     //     document.write(modanTechs[0]['name']);
//     // }

//     function handleHttpResponse(http)
//     {
//         if (http.readyState == 4)
//         {
//             if(http.status == 200)
//             {
                
//                 request2.onload = function() {
//                     var modanTechs = request2.response;
//                     document.write(modanTechs[0]['name']);
//                 }
//             }
//             else{

//                 // エラー処理
//             }
//         }
//     }


//     // function techTitle(jsonObj) {
//         // var planet;
//         // for(var i=0; i<jsonObj.length; i++) {
//         //     planet = document.getElementById(jsonObj[i]['id']);
//         //     // var techImage = document.createElement('img'); 
//         //     // techImage.src = "data/" + jsonObj[i]['image']; 
//         //     // planet.appendChild(techImage);
//         // }
        
//     // }
// })();