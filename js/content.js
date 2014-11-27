chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.id);
        if (request.action == "content")
            sendResponse({message: "message from content"});
    });

setInterval(function () {
    console.log("I'am content.js");
}, 1000);