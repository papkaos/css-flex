let browserContext = 16;
let browserUnits = 'rem';

let phone = (468 / browserContext) + browserUnits ;
let tablet = (768 / browserContext) + browserUnits;
let desktop = (900 / browserContext) + browserUnits;

module.exports = {
  extensions: {
    '--phone': '(max-width: ' + phone + ')',
    '--tablet': '(max-width: ' + tablet + ')',
    '--desktop': '(max-width: ' + desktop + ')',
  }
};