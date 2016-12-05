var app = {
	initialize: function(){
		this.bindEvents();
	},
	bindEvents:function(){
		document.addEventListener('deviceready', this.onDeviceReady, false)
	},
	onDeviceReady:function(){
		$(function (){
			$('#decode').click(function(){
				alert("Am here!");
				cordova.plugins.barcodeScanner.scan(
					function(result){
						alert("Information: "+ result.txt+ "\n"+"format: "+ result.format+"\n");
					},
					function(error){
						alert(error);
					}
				);
			});
		});
	}
};