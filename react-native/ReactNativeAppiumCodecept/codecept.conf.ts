import {setHeadlessWhen, setCommonPlugins} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      app: './android/app/build/outputs/apk/debug/app-debug.apk',
      platform: 'Android',
      // device: 'emulator',
      desiredCapabilities: {
        // platformName: 'Android',
        platformVersion: '11',
        deviceName: 'sdk_gphone_x86',
        // app: './android/app/build/outputs/apk/debug/app-debug.apk',
        automationName: 'UiAutomator2',
      },
    },
  },
  include: {},
  name: 'ReactNativeAppiumCodecptjs',
};
