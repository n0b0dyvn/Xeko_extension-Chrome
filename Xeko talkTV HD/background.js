var script = document.createElement("script");
script.src = chrome.extension.getURL("my_file.js");
document.documentElement.appendChild(script);