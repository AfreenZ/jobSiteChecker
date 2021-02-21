// insert list of trigger words 
chrome.webviewTag.find(searchText: "Hire", matchCase, Notification )



chrome.storage.sync.get('timestamps', function(result){
    var temp = result.timestamps;
    temp.push(new Date().toLocaleString());
    chrome.storage.sync.set({'timestamps':temp}, function(){
        console.log("timestamps set");