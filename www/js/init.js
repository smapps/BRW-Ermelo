$(document).bind("mobileinit", function()
{
	/*
  $.extend(  $.mobile , {
    autoInitializePage: false,
    loadingMessage: false
  });
  */
});
//var gaPlugin;
   
//document.addEventListener("deviceready", onDeviceReady(), true);


function onDeviceReady(){

	init('off');
	return navigator.geolocation.getCurrentPosition(initialize);
	document.addEventListener("backbutton", onBackKeyDown, false);
	window.plugin.statusbarOverlay.hide();
};
function onLoad()
{
	if(typeof navigator.device == "undefined")
	{
		document.addEventListener("deviceready", onDeviceReady, false);
	}
	else{
		onDeviceReady();
	}
}





/*
document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown(e) {
  e.preventDefault();
}
*/
