chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		console.log("ciao");
			document.querySelectorAll(".tinyViewport .slim #blueBar.fixed_elem")[0].style.position = "fixed";
			document.querySelectorAll(".tinyViewport .slim #blueBar.fixed_elem")[0].style.position = "fixed !important";
			console.log("ciao2");
			addNewStyle('.tinyViewport .slim #blueBar.fixed_elem {position:fixed !important;}')

	}
	}, 10);
});

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

