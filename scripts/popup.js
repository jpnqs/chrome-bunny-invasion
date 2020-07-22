document.getElementById('invade').addEventListener('click', function() {
    chrome.runtime.sendMessage('invadeBrowser', function() {
        window.close();
    });
});
