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
   
document.addEventListener("deviceready", function(){
	
	/*navigator.geolocation.getCurrentPosition(onsuccess3,onerror3);
	function onsuccess3(position)
	{
		//oke
	}
	function onerror3(position)
	{
		notification("U dient GPS aan te zetten om deze APP te gebruiken", "GPS fout","Oke");
		//goToURL('outoforder.html');
	}	*/
	
	window.plugin.statusbarOverlay.hide();

}, true);


function onDeviceReady(){

	/*setTimeout(function() {
	 navigator.splashscreen.hide();
	}, 500);*/

};




/*
document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown(e) {
  e.preventDefault();
}
*/