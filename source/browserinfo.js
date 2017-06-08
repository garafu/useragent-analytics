var BrowserInfo;
var Version = require("./version.js");
const RenderingEngineType = require("./renderingenginetype.js");
const JavaScriptEngineType = require("./javascriptenginetype.js");

// ----------------------------------------------------
// BrowserInfo class.
// ----------------------------------------------------
/**
* @class
*
* Initialize a new instance of the BrowserInfo class.
* @public
* @constructor
* @param    {string}    userAgent       UserAgent string.
*/
BrowserInfo = function (userAgent) {

  //Initialize properties.
  this.original = '';
  this.type = null;
  this.version = null;
  this.rendering = null;
  this.javascript = null;

  // Initialize this instance.
  if (userAgent) {
    this.initialize(userAgent);
  }
};

/**
 * Get browser type and version information from useragent string.
 * @param   {string}    userAgent     UserAgent string.
 * @return  {object}
 */
BrowserInfo.getBrowserTypeVersion = function (userAgent) {
  var browser, version, array;

  if (userAgent.indexOf('opera') >= 0 || userAgent.lastIndexOf('opr') >= 0) {

    if (userAgent.indexOf('opera mini') >= 0) {

      // Opera Mini
      browser = 'operamini';

      // Opera Mini/7.0.5
      array = /opera mini\/([\d\.]+)/.exec(userAgent);
      version = (array) ? array[1] : '';

    } else if (userAgent.indexOf('opera mobi') >= 0) {

      // Opera Mobile
      browser = 'operamobile';

      // Version/12.02
      array = /version\/([\d\.]+)/.exec(userAgent);
      version = (array) ? array[1] : '';

    } else {

      // Opera
      browser = 'opera';

      // Opera 9.00, Opera/9.0, Version/11.50
      array = /version\/([\d\.]+)/.exec(userAgent);
      if (array) {
        version = array[1];
      } else {
        array = /(?:opera|opr)[\s\/]+([\d\.]+)/.exec(userAgent);
        version = (array) ? array[1] : '';
      }
    }

  } else if (userAgent.indexOf('edge') >= 0) {

    // Micrrosoft Edge, Windows Phone
    browser = 'edge';

    // Edge/12.0
    array = /edge\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0) {

    // Internet Explorer, Windows Phone, Sleipnir, Adobe Bridge
    browser = 'msie';

    // MSIE 9.0, rv 11.0
    array = /(msie|rv:?)\s?([\d\.]+)/.exec(userAgent);
    version = (array) ? array[2] : '';

  } else if (userAgent.indexOf('firefox') >= 0) {

    // Firefox(not include Mozilla)
    browser = 'firefox';

    // Firefox/0.9.3
    array = /firefox\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('chrome') >= 0 || userAgent.indexOf('crios') >= 0) {

    // Chrome, Android default this
    browser = 'chrome';

    // Chrome/6.0.472.55
    array = /[chrome|crios]\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('android') >= 0) {

    // Android default browser
    browser = 'browser';

    // Version/4.0
    array = /version\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('silk') >= 0) {

    // Silk
    browser = 'silk';

    // Silk/2.4
    array = /silk\/([\d\.]*)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('mercury') >= 0) {

    // Safari
    browser = 'mercury';

    // Mercury/7.4.2
    array = /mercury\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else if (userAgent.indexOf('safari') >= 0) {

    // Safari
    browser = 'safari';

    // Version/3.0.3
    array = /version\/([\d\.]+)/.exec(userAgent);
    version = (array) ? array[1] : '';

  } else {

    // Other case
    browser = 'unknown';
    version = '';

  }

  return {
    browser,
    version
  };
};

/**
 * Get browser engine information from useragent string.
 * @param   {string}    userAgent   UserAgent string.
 * @return  {object}
 */
BrowserInfo.getEngine = function (userAgent) {
  var rendering, javascript, version;

  if (userAgent.indexOf('edge') >= 0) {
    rendering = RenderingEngineType.EDGEHTML;
    javascript = JavaScriptEngineType.CHAKRA;
  } else if (userAgent.indexOf('webkit') >= 0) {
    rendering = RenderingEngineType.WEBKIT
    javascript = JavaScriptEngineType.JAVASCRIPT_CORE;
  } else if (userAgent.indexOf('msie') >= 0 || userAgent.indexOf('trident') >= 0) {
    rendering = RenderingEngineType.TRIDENT;
    javascript = JavaScriptEngineType.JSCRIPT;
  } else if (userAgent.indexOf('presto') >= 0) {
    rendering = RenderingEngineType.PRESTO;
    [, version] = /presto\/([\d\.]+)/.exec(userAgent);
    if (version) {
      version = new Version(version);
      if (version.isOrMore(2, 5)) {
        javascript = JavaScriptEngineType.CARAKAN;
      } else if (version.isOrMore(2, 1)) {
        javascript = JavaScriptEngineType.FUTHARK;
      } else {
        javascript = JavaScriptEngineType.UNKNOWN;
      }
    } else {
      javascript = JavaScriptEngineType.UNKNOWN;
    }
  } else if (userAgent.indexOf('khtml') >= 0) {
    rendering = RenderingEngineType.KHTML;
    javascript = JavaScriptEngineType.KJS;
  } else if (userAgent.indexOf('gecko') >= 0) {
    rendering = RenderingEngineType.GECKO;
    javascript = JavaScriptEngineType.SPIDER_MONKEY;
  } else {
    rendering = 'unknown';
    javascript = 'unknown';
  }

  return {
    rendering,
    javascript
  };
};

/**
 * Get architecture information from useragent string.
 * @param   {string}    userAgent   UserAgent string.
 * @return  {string}
 */
BrowserInfo.getArchitecture = function (userAgent) {
  var architecture;

  if (userAgent.indexOf('arm') >= 0) {
    architecture = 'arm';
  } else if (userAgent.indexOf('win64') >= 0) {
    if (userAgent.indexOf('ia64') >= 0) {
      architecture = 'ia64';
    } else {
      architecture = 'x64';
    }
  } else if (userAgent.indexOf('windows') >= 0 && userAgent.indexOf('windows phone') < 0) {
    architecture = 'x86';
  } else {
    architecture = 'unknown';
  }

  return architecture;
};

/**
* Initalize this instance according to the specified user agent string.
* @private
* @param    {string}    userAgent       UserAgent string.
*/
BrowserInfo.prototype.initialize = function (userAgent) {

  var array;
  var browser = '';
  var engine = '';
  var architecture = '';
  var version = null;

  // Normalize useragent string to lowercase.
  userAgent = userAgent.toLowerCase();

  // Detect browser and browser version.
  ({ browser, version } = BrowserInfo.getBrowserTypeVersion(userAgent));

  // Rendering engine
  ({ rendering, javascript } = BrowserInfo.getEngine(userAgent));

  // Architecture.
  architecture = BrowserInfo.getArchitecture(userAgent);

  // Set properties.
  // this.original = browser;
  this.type = browser;
  this.version = new Version(version);
  this.rendering = rendering;
  this.javascript = javascript;
  this.architecture = architecture;
};

/**
* Whether the current browser is equal to the specified browser.
* @public
* @param    {string}    type    Browser type string.
* @return   {boolean}   Whether the current browser is equal to the specified browser.
*/
BrowserInfo.prototype.is = function (type) {

  return (typeof type === 'string') && (type.toLowerCase() === this.original);

};

module.exports = BrowserInfo;