function goToRandom() {
        console.log("randomSTART");
	if(localStorage["deviantRoulette"] == undefined || localStorage["deviantRoulette"] == "deviant")
        {
            if(localStorage["openInCurrentWindow"] == "true")
            {
                chrome.tabs.create(deviant);
            } else {
                chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.update(tab.id, deviant);
                });
            }
        }            
        else if(localStorage["deviantRoulette"] == "group")
        {
            if(localStorage["openInCurrentWindow"] == "true")
            {
                chrome.tabs.create(group);
            } else {
                chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.update(tab.id, group);
                });
            }
        }
        else if(localStorage["deviantRoulette"] == "deviation")
        {
            if(localStorage["openInCurrentWindow"] == "true")
            {
                chrome.tabs.create(deviation);
            } else {
                chrome.tabs.getSelected(null, function(tab) {
                chrome.tabs.update(tab.id, deviation);
                });
            }
        }
}


// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  goToRandom();
});