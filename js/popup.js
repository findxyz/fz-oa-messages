function showMessage(response) {
    if(response){
        var message = document.getElementById("message");
        // 如果JSON.parse(response);出现异常则直接显示response
        try{
            var result = JSON.parse(response);
            var table = "<table>";
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
            alert(response);
            message.innerHTML = "需要登录erp后使用";
        }

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
