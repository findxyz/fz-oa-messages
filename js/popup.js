function showMessage(response) {
    var message = document.getElementById("message");
    message.innerHTML = response.message;
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "content"}, function(response) {
        var response = response || {};
        var error = chrome.runtime.lastError;
        if(error){
            for(var p in error){
                response[p] = error[p];
            }
        }
        showMessage(response);
    });
});