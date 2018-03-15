
//initialize a map
function initMap() {
  let current_pos = '';
  let current_coord = {};

  const Vancouver = {lat: 49.246 , lng: -123.116};

  const options = {
    zoom: 8,
    center: Vancouver
  };

  const map = new google.maps.Map(document.getElementById('map'),options );
  //initial marker
  const initial_marker = new google.maps.Marker({
    position: Vancouver,
    map: map
  });

  //Geocode API with AJAX
  const getLocationData = (addr) =>{
     let GeoAPI = "https://maps.googleapis.com/maps/api/geocode/json?address="+ addr +"&key=AIzaSyBNa4rB5d9Oss2Ff2L6daE99fG4Ue4OvIQ";
     const showResult = (data)=>{
       console.log(data);
       current_coord = data.results[0].geometry.location;
       console.log(current_coord);
     };
     //AJAX
     $.getJSON(GeoAPI,showResult);

  };
  //event handlers
  document.getElementById("button").addEventListener("click", ()=>{
      current_pos = document.getElementById("addr").value;
      console.log(current_pos);
      getLocationData(current_pos);

  });
  document.getElementById("addr").addEventListener("keyup", (e)=>{
     if(e.keyCode === 13){
        document.getElementById("button").click();
     }
  });

}
