$.get( "http://tv.csmtalk.vn/streaming/play/talk-client/channel/pewpewvn?key=Talk%40build", function( data ) {
  var hd_data = data.split('\n');
  var limit= "";
  var manifestUrl="";
  for (var i in hd_data) {
	if (limit !== "" && manifestUrl!=="") {
		break;
	} 
	if (hd_data[i].indexOf("loadPlayer.manifestUrl")>-1) {
		manifestUrl = hd_data[i];
		continue;
	}
	if (hd_data[i].indexOf("loadPlayer.limit") > -1){
		limit = hd_data[i];
		continue;
	}
  }
  eval(manifestUrl);
  eval(limit);
  loadPlayer.initialize();
}).fail(function() {
	loadPlayer.manifestUrl="http://tv.csmtalk.vn/streaming/play/manifest.smil?channel=pewpewvn&listbitrate=240p:360p:480p:720p&serverIp=live.csmtalk.vcdn.vn&type=livetv&limit=1&key=273318";
	loadPlayer.limit = "0";
	loadPlayer.initialize();
});;

		