let $browserContext = 16;

module.exports = {
  functions: {
    ls: function (ls) {
      var ls = ls / 1000;
      return ls + 'em';
    },
    rem: function ($pixels) {
      var $rem = $pixels / $browserContext;
      return $rem + 'rem';
    }
  }
};