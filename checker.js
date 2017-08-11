(var urls = ["reddit.com", "yahoo.com"];
console.log(urls);
extension.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
});

// chrome.extension.getBackgroundPage().console.log('foo');
chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
        console.log(info);
        extension.getBackgroundPage().console.log(info);
        // Redirect the lolcal request to a random loldog URL.
        var i = Math.round(Math.random() * urls.length);
        return {
            redirectUrl: "https://www.bloomberg.com/404"
        };
    }
);
)();
