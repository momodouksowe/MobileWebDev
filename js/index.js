(function(){
	
	document.addEventListener('deviceready', onDeviceReady.bind(this),false);
	var destinationType;
	var pictureSource;

	function onDeviceReady(){
		pictaureSource = navigator.camera.pictureSource;
		destinationType = navigator.camera.destinationType;

	
 	document.getElementById("capturePhoto").onclick = function(){
		navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality : 50, destinationType : destinationType.DATA_URL
  });
 }
};
	function onPhotoDataSuccess(imagedata){
	var smallimage = document.getElementById('smallImage');
	smallimage.style.display ='block';
	smallimage.src="data:image/jpeg;base64," +imagedata;
}
	function onFail(message){
	alert("Failed because: "+ message);
  }
}) ();
// 	function onPhotoURLSuccess(imageURL){
// 	var largeimage = document.getElementById('smallimage');
// 	largeimage.style.display ='block';
// 	largeimage.src.="data:image/jpeg;base64," +imageURL;
// };


// });