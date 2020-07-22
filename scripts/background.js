chrome.runtime.onInstalled.addListener(function() {
    chrome.runtime.onMessage.addListener(function(message, callback) {
        if (message == "runContentScript"){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                    callback();
                });
            });      
        }
    });
});
