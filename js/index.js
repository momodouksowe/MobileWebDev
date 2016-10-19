(function(){
	
	document.addEventListener('deviceready', onDeviceReady.bind(this),false);
	var destinationType;
	var pictureSource;


	function onDeviceReady(){
		alert("we are here");
		pictureSource = navigator.camera.pictureSource;
		destinationType = navigator.camera.destinationType;

	}


 	document.getElementById('capturePhoto').onclick = function(){
 		alert("Am here!");
		navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality : 50, destinationType : destinationType.DATA_URL
  });
 };

    document.getElementById('geolocation').onclick = function(){
 		alert("Am here!");
		var watchID = navigator.geolocation.watchPosition(onSuccess,onError, {timeout:5000});
 };


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
  	alert('Latitude:' + position.coords.Latitude +'<br>'+
  					    'Longitude: '+ position.coords.Latitude + '<br>'+
  					    '<hr /> ');
  					    
  }

  function onError(error){
  	alert('code: '+ error.code + '\n'+ 'message: '+error.message+'\n');
  }

  // var watchID = navigator.geolocation.watchPosition(onSuccess,onError,timeout);
}) ();
// 	function onPhotoURLSuccess(imageURL){
// 	var largeimage = document.getElementById('smallimage');
// 	largeimage.style.display ='block';
// 	largeimage.src.="data:image/jpeg;base64," +imageURL;
// };


// });