chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "content"){
            httpRequest('http://erp.cranewh.com:8001/system/userOwnAssignedManager/listUserOwnAssigned.do', sendResponse);
            /*
            the reason for return true

            http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent

            This function becomes invalid when the event listener returns,
            unless you return true from the event listener to indicate you wish to send a response asynchronously
            (this will keep the message channel open to the other end until sendResponse is called).

            So you just need to add return true;
            after the call to getUrls to indicate that you'll call the response function asynchronously.
            */
            return true;
        }
    });

function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
