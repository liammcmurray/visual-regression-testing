// Enable error checking
var assert = require("assert");
// Load webdriverio and webdrivercss
var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");

// Set up the browser instance, either Firefox or Chrome
var options = {
  desiredCapabilities: {
    browserName: "firefox"
  }
};

// Open the set browser
var browser = wdio.remote(options);

webdrivercss.init(browser);

// Define css selectors to use in test
var header = {
  name: "Header",
  elem: "header"
};

var sitenav = {
  name: "Site Nav",
  elem: ".site-nav"
}

var summaryinfo = {
  name: "Summary Information",
  elem: ".summary-information"
}

// etc etc etc

var footer = {
  name: "Footer",
  elem: "footer"
}

browser
  .init()
  // Give the URL of the page we want to check
  .url("http://localhost/explore/")
  // Give the function a unique ID parameter, example of erroring pointing at header element
  .webdrivercss("Explore", header, function(err, shots) {
    assert.ifError(err);
    assert.ok(shots.Header[0].isWithinMisMatchTolerance, "Header section has changed.");
  })
  .webdrivercss("Explore", sitenav)
  .end();