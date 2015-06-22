exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
'browserName': 'chrome',
'chromeOptions': {
   binary:'C:/Users/sauravk/Documents/CEF/Debug/cefclient.exe'
  }
 },
}