const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const config = requireHelper('e2e-config');
const utils = requireHelper('e2e-utils');
requireHelper('rejection');

jasmine.getEnv().addReporter(browserStackErrorReporter);

describe('Empty message example-index tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/emptymessage/example-index');
  });

  it('Should not have errors', async () => {
    await utils.checkForErrors();
  });

  it('Should be able to set id/automations', async () => {
    await browser.driver.sleep(config.sleep);

    expect(await element(by.id('empty-message-id-1')).getAttribute('id')).toEqual('empty-message-id-1');
    expect(await element(by.id('empty-message-id-1')).getAttribute('data-automation-id')).toEqual('automation-id-emptymessage-1');

    expect(await element(by.id('empty-message-id-2')).getAttribute('id')).toEqual('empty-message-id-2');
    expect(await element(by.id('empty-message-id-2')).getAttribute('data-automation-id')).toEqual('automation-id-emptymessage-2');

    expect(await element(by.id('empty-message-id-3')).getAttribute('id')).toEqual('empty-message-id-3');
    expect(await element(by.id('empty-message-id-3')).getAttribute('data-automation-id')).toEqual('automation-id-emptymessage-3');

    expect(await element(by.id('empty-message-id-4')).getAttribute('id')).toEqual('empty-message-id-4');
    expect(await element(by.id('empty-message-id-4')).getAttribute('data-automation-id')).toEqual('automation-id-emptymessage-4');
  });
});
