// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

function initMap() {
  const Vancouver = {lat: 49.246 , lng: -123.116};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: Vancouver
  });
  const marker = new google.maps.Marker({
    position: Vancouver,
    map: map
  });
}
