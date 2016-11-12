# Visual Regression Testing
This is all based on https://leanpub.com/visual-regression-testing-and-webdriverio-guide/read

----
### Running Visual Regression Tests

1. Install node.js:
  - https://github.com/creationix/nvm#node-version-manager-

2. Install GraphicsMagick
  - On Mac, using homebrew `$ brew install graphicsmagick`
  - On Windows, `http://www.graphicsmagick.org/download.html`
  - On Linux, `sudo yum install GraphicsMagick`

3. Run `npm install`
  
4. Install Selenium server locally:
  - `./node_modules/.bin/selenium-standalone install`

5. Start your server with:
  -`./node_modules/.bin/selenium-standalone start`

6. Write your tests in javascript
  - (look at `origins.js`,`login.js`,`tests.js` in root of project folder)

7. Run:
  - `node origins.js`
  - This assumes you have a local version of the Explore page at http://localhost/explore
  - To see an assertion pick up an error, make a visual change to the `<head>` section on that page and re-run the test.

----
### Further Reading
- http://webdriver.io/guide/usage/selectors.html
