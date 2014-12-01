function showMessage(response) {
    if(response){
        var message = document.getElementById("message");
        // 如果JSON.parse(response);出现异常则直接显示response
        try{
            var result = JSON.parse(response);
            var table = "<table>";
            table += "<caption>可自分配的权限组</caption>";
            table += "<tr><th>ID</th><th>权限组名称</th></tr>";
            for(var i=0; i<result.rows.length; i++){
                var record = result.rows[i];
                table += "<tr>";
                table += "<td>" + record.ID + "</td>";
                table += "<td>" + record.SELF_ASSIGNED_NAME + "</td>";
                table += "</tr>";
            }
            table += "</table>";
            message.innerHTML = table;
        }catch(e){
            message.innerText = response;
        }

    }else{
        window.close();
    }
}

chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var background = chrome.extension.getBackgroundPage();
    chrome.tabs.sendMessage(tabs[0].id, {action: "content", queryUrl: background.queryUrl}, function(response) {
        /*
        var error = chrome.runtime.lastError;
        */
        showMessage(response);
    });
});
