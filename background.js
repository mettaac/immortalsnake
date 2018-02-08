'use strict';

/*global firefox:false */

browser.browserAction.setBadgeText({text: '(🐍)'});
//browser.browserAction.setBadgeBackgroundColor({color: '#eae'}); //logo background

browser.browserAction.onClicked.addListener(function(tabId) {
  browser.tabs.create('popup/snake.html');
});
