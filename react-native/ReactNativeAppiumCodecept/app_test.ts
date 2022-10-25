Feature('app');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

Scenario('test add button', async ({I}) => {
  I.waitForVisible('~number-text', 2000);
  I.seeElement('~number-text');
  const initialNumber = Number(await I.grabTextFrom('~number-text'));
  I.seeElement('~add-button');
  I.click('~add-button');
  I.wait(1);
  I.see((initialNumber + 1).toString(), '~number-text');
});

Scenario('test sub button', async ({I}) => {
  I.waitForVisible('~number-text', 2000);
  I.seeElement('~number-text');
  const initialNumber = Number(await I.grabTextFrom('~number-text'));
  I.seeElement('~sub-button');
  I.click('~sub-button');
  I.wait(1);
  I.see((initialNumber - 1).toString(), '~number-text');
});
