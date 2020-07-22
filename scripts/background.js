chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.onMessage.addListener(function(message, callback) {
        if (message === 'invadeBrowser'){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'answer', function(response) {
                    callback();
                });
            });
        }
    });
});
