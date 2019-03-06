// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    // for the current tab, inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tab.ib, {
        file: 'inject.js'
    });

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log('---------------');
            console.log(request.newIconPath);
            console.log('---------------');
            // read `newIconPath` from request and read `tab.id` from sender
            chrome.browserAction.setIcon({
                path: request.newIconPath,
                tabId: sender.tab.id
            });
        });;
});