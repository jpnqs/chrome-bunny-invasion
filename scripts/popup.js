document.getElementById("invade").addEventListener("click", function() {
    chrome.runtime.sendMessage("runContentScript", 
    function(response) {
        window.close();

     });//callback will be invoked somewhere in the future

});