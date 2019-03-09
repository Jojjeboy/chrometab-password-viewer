// this is the background code...
var activeTabId;
doInCurrentTab( function(tab){ activeTabId = tab.id } );
function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}
chrome.tabs.executeScript(activeTabId, {
    file: 'detect.js'
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.exist);
        // read `newIconPath` from request and read `tab.id` from sender
        if (request.exist) {
            chrome.browserAction.setIcon({
                path: 'images/lock128.png',
                tabId: sender.tab.id
            });

            // listen for our browerAction to be clicked
            chrome.browserAction.onClicked.addListener(function (tab) {
                // for the current tab, inject the "inject.js" file & execute it
                chrome.tabs.executeScript(tab.ib, {
                    file: 'inject.js'
                });
            });
        }
    });

