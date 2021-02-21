var port = chrome.extension.connect({
    name: "P/BG"
});

port.onMessage.addListener(function(numberoftriggers){
    //console.log("message recieved "+msg);
    if (numberoftriggers == 0) {
        document.getElementById("tw").innerHTML = "No triggerwords found";

    } else {
        document.getElementById("tw").innerHTML = numberoftriggers;
    }

    return true;
});
