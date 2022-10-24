const wdio = require('webdriverio');
const assert = require('assert');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '11',
    deviceName: 'sdk_gphone_x86',
    app: './android/app/build/outputs/apk/release/app-release.apk',
    // appPackage: 'io.appium.android.apis',
    // appActivity: '.view.TextFields',
    automationName: 'UiAutomator2',
  },
};

let client;

jest.setTimeout(30000);

describe('App', () => {
  beforeAll(async () => {
    client = await wdio.remote(opts);
  });

  it('number should increase when add button is clicked', async () => {
    await client.$('~app-root').waitForDisplayed(20000, false);
    const initialValue = Number(await client.$('~number-text').getText());
    await client.$('~add-button').click();
    await client.$('~app-root').waitForDisplayed(50000, false);
    const newValue = Number(await client.$('~number-text').getText());
    assert.notEqual(newValue, initialValue);
    await client.deleteSession();
  });
});
