// insert list of trigger words 
var trigger = ["hired immediately", "position guaranteed", "fee", "payment", "cash", "check", "wire money", "credit card", "no experience necessary", "social security number", "ssn"]; 
var results = function(results) {

// insert list of trigger words

chrome.webviewTag.find(trigger, matchCase, function(results) { 
  var numberoftriggers = results.trigger;
  function triggerPresence() {
    // Get a value saved in a form.
    var thePresence = numberoftriggers.value;

    chrome.tabs.query({active:true}, function(tabs){
      chrome.extension.onConnect.addListener(function(port){
        console.log(numberoftriggers);
        port.postMessage(numberoftriggers);
      });
    });
}

})

}
