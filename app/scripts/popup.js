

document.getElementById('invade').addEventListener('click', function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, 'invadeBrowser', function(response) {
            window.close();
        });
    });
});