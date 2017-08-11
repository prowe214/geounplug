chrome.runtime.getBackgroundPage(function(backgroundPage){
var currentUrl = backgroundPage.tabURL;
//Use the url ........
console.log("WINDOW PAUL:",backgroundPage);
});

var urls = ["reddit.com", "yahoo.com"];
console.log(urls);
chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
});

// chrome.extension.getBackgroundPage().console.log('foo');
chrome.webRequest.onBeforeRequest.addListener(
    function(info) {
        alert(info);
        chrome.extension.getBackgroundPage();
        console.log(info);
        // Redirect the lolcal request to a random loldog URL.
        var i = Math.round(Math.random() * loldogs.length);
        return {
            redirectUrl: "https://www.bloomberg.com/404"
        };
    },
    {urls: ["facebook.com"]}
);
/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.


document.addEventListener('DOMContentLoaded', function() {
    // Put the image URL in Google search.
    // renderStatus('Performing Google Image search for ' + url);

    // getImageUrl(url, function(imageUrl, width, height) {
    //
    //   renderStatus('Search term: ' + url + '\n' +
    //       'Google image search result: ' + imageUrl);
    //   var imageResult = document.getElementById('image-result');
    //   // Explicitly set the width/height to minimize the number of reflows. For
    //   // a single image, this does not matter, but if you're going to embed
    //   // multiple external images in your page, then the absence of width/height
    //   // attributes causes the popup to resize multiple times.
    //   imageResult.width = width;
    //   imageResult.height = height;
    //   imageResult.src = imageUrl;
    //   imageResult.hidden = false;
    //
    // }, function(errorMessage) {
    //   renderStatus('Cannot display image. ' + errorMessage);
    // });
});
