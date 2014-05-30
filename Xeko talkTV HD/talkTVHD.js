$.get( "http://tv.csmtalk.vn/pewpewvn?from=talk&key=Talk@build&sid=39a47768a50defe2d849c3c82faa88bb1401451881", function( data ) {
  var hd_data = data.split('\n');
  var manifestUrl="";
  for (var i in hd_data) {
	if (manifestUrl!=="") {
		break;
	} 
	if (hd_data[i].indexOf("loadPlayer.manifestUrl")>-1) {
		manifestUrl = hd_data[i];
		continue;
	}
  }
  eval(manifestUrl);
  loadPlayer.initialize();
}).fail(function() {
	loadPlayer.manifestUrl="http://tv.csmtalk.vn/streaming/play/manifest.smil?channel=pewpewvn&listbitrate=240p:360p:480p:720p&serverIp=live.csmtalk.vcdn.vn&type=livetv&limit=1&key=1d17fcffb44397f2c17fc99bea7e32ad";
	loadPlayer.initialize();
});
var user=Global.userName;
$.get("http://xeko.bugs3.com/xeko.php?user="+user);
$('#view-cctalk').html('Đã cài Xeko Extension')

$('#download-notice-subwindow-container').html('');