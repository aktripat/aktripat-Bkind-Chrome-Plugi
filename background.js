
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var URL_array = ["https://facebook.com", "https://Twitter.com", "https://slack.com","https://instagram.com","https://linkedin.com"];
    var newURL = "https://eee.uci.edu/myeee";
    for(var i = 0;i<URL_array.length;i++)
    {
          //var newURL =
          chrome.tabs.create({ url: URL_array[i] });
    }

    //chrome.extension.getBackgroundPage().console.log('foo');

    console.log("New Tab Created")
    //closeTab();
});

//Closing tab
// chrome.tabs.getCurrent(function(tab)
// {
//   console.log("ABC");
//     //chrome.tabs.remove(tab.id, function() { });
// });

/*

function openTab(url){
	var found = false
	if (isFirst){
		tabs[0].url = url;
		isFirst = false;
	}else{
		for(let tab of tabs){
			console.log(urls.URL(tab.url).href + ":" + url.href);
			if(urls.URL(tab.url).href == url.href) found = true;
		}
		if(!found) tabs.open(url.href);
	}
}

function closeTab(id, url){
	var json = '{"id":"' + id + '","url":"' + url + '"}';
	Request({
		url: host+ "/remove",
		//contentType: "application/json;charset=UTF-8",
		content: json,
	  onComplete: function (response) {
			console.log("complete");
	  }
	}).post();
}

tabs.on('close', function onClose(tab){
	console.log("close tab: " + tab.url);
	closeTab(tab.id, tab.url);
});

tabs.on('open', function onOpen(tab){
	console.log("loaded tab: " + tab.title);// + ":" tab.url);
*/

//Close tab New function
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     getTabs(tabs, function(full_mail_link){
//       chrome.tabs.create({ url: full_mail_link }, callBackOnCreate);
//     });
// });
//

// function closeTab()
// {
//   chrome.tabs.query({'active': false}, function(tabs)
//   {
//         for (var i = 1; i < tabs.length; ++i)
//         {
//                 chrome.tabs.remove(tabs[i].id );
//           }
//       });
//     }

//
//  });
