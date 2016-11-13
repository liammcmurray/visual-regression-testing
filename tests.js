//load webdriverio and webdrivercss
var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");

//set up the browser instance
var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};
//open the set browser, check it's the right page by displaying it in the console
var browser = wdio.remote(options);

webdrivercss.init(browser);

//define css selectors to use in test
var menuIcon = {
  name: "Menu Icon",
  elem: ".menu a"
};

var menu = {
  name: "Menu",
  elem: ".main_menu"
};

var projectLink = menu.elem + " a[href$=project]";

browser
  .init()
//give the URL of the page we want to check
  .url("http://outdatedbrowser.com/en")
//give the function a unique ID parameter
  .webdrivercss("Main Menu Menu Icon", menuIcon)
  .click(menuIcon.elem)
  .webdrivercss("Main Menu Open", menu)
  .click(projectLink)
// WebdriverIO will wait here until the "Project" page loads
  .click(menuIcon.elem)
  .webdrivercss("Main Menu - Projects Page", menu)
  .getUrl()
  .then(function(url) {
    console.log(url);
    // outputs:
    // http://outdatedbrowser.com/en/project
  })
  .end();
