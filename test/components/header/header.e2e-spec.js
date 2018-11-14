const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const utils = requireHelper('e2e-utils');
const config = requireHelper('e2e-config');

requireHelper('rejection');

jasmine.getEnv().addReporter(browserStackErrorReporter);

describe('Header Index Tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/header/example-index');
  });

  it('Should not have errors', async () => {
    await utils.checkForErrors();
  });

  it('Should display header text', async () => {
    expect(await element(by.css('.title')).getText()).toEqual('Page Title');
  });

  if (utils.isChrome() && utils.isCI()) {
    it('Should not visual regress', async () => {
      const pageContainerEl = await element(by.className('page-container'));
      await browser.driver.sleep(config.waitsFor);

      expect(await browser.protractorImageComparison.checkElement(pageContainerEl, 'header-index')).toEqual(0);
    });
  }
});
