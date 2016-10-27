(function(){
	
	document.addEventListener("deviceready", onDeviceReady.bind(this),false);
	var destinationType;
	var pictureSource;


	function onDeviceReady(){
			alert("we are here");
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

	}


 	document.getElementById('capturePhoto').onclick = function(){
 		alert("Am here!");
		navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality : 50, allowEdit: true, destinationType : DestinationType.DATA_URL
  });
 }

    document.getElementById('geolocation').addEventListener("click",function(){
 		alert("Am here!");
		navigator.geolocation.getCurrentPosition(onSuccess,onError, {enableHighAccuracy: true
	});
 });


 function onPhotoDataSuccess(imagedata){
	var smallImage = document.getElementById('smallImage');
	smallImage.style.display ='block';
	smallImage.src="data:image/jpeg;base64," +imagedata;
}

  function onFail(message){
	alert("Failed because: "+ message);
  }

  function onSuccess(position){
  	//var element = document.getElementById('geolocation');
  	alert('Latitude:' + position.coords.latitude +'<br>'+
  					    'Longitude: '+ position.coords.longitude + '<br>'+
  					    '<br> ');
  					    
  }

  function onError(error){
  	alert('code: '+ error.code + '\n'+ 'message: '+error.message+'\n');
  }

}) ();
