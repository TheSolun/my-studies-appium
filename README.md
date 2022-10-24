# my-studies-appium
## 1 - React-Native
### 1.1 - Installing Appium
`npm install -g appium`
### 1.2 - Installing Webdriverio
`npm install webdriverio`
### 1.3 - Config and Write Tests
```
const wdio = require("webdriverio");
const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "pathToApp.apk",
    automationName: "UiAutomator2"
  }
};
const client = await wdio.remote(opts);
// Tests code ...
await client.deleteSession();
```
### 1.4 - Running Emulator
`npx react-native run-android`
### 1.5 - Starting Metro
`npx react-native start`
### 1.6 - Starting Appium
`appium`
### 1.7 - Running Tests
In a different terminal
`npm test`

