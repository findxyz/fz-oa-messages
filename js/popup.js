function showMessage(response) {
    if(response){
        var message = document.getElementById("message");
        message.innerHTML = response;
    }else{
        window.close();
    }
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "content"}, function(response) {
        /*
        var error = chrome.runtime.lastError;
        */
        showMessage(response);
    });
});
