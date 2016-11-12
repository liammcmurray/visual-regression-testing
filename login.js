//load webdriverio and webdrivercss
var wdio = require("webdriverio");
var webdrivercss = require("webdrivercss");

//set up the browser instance
var options = {
  desiredCapabilities: {
    browserName: "firefox"
  }
};
// Open the set browser, check it's the right page by displaying it in the console
var browser = wdio.remote(options);

webdrivercss.init(browser);

// Define css selectors to use in test
var loginForm = {
  name: "Login Form",
  elem: ".login-form"
};

var username = loginForm.elem + " #login-email-field";

var password = loginForm.elem + " #login-password-field_";

var error = ".error-message";

browser
    .init()
    .url("https://codepen.io/login")
    .webdrivercss("Login Default", loginForm)
    .setValue(username, "admin")
    .webdrivercss("Login Username", loginForm)
    .setValue(password, "badpassword")
    .webdrivercss("Login Username Password", loginForm)
    .submitForm(loginForm.elem)
    .isVisable(error)
    .then(function(isErrorVisible) {
      console.log("Is error message visible?", isErrorVisible);
// Should print "Is error message visible? True"
    })
    .end();