module.exports = {
  // server: {
  //   command: 'PORT=4445 node app/server.js',
  //   launchTimeout: 50000
  // },
  // https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions
  launch: {
    headless: true,
    devtools: false,
    ignoreHTTPSErrors: true,
    dumpio: false
  }
};
