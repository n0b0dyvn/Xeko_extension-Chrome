var script = document.createElement("script");
script.type = "text/javascript";
script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
script.src = chrome.extension.getURL("my_file.js");
document.documentElement.appendChild(script);