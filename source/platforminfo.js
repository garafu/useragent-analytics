var PlatformInfo;
var Version = require("./version.js");

// ----------------------------------------------------
// PlatformInfo class.
// ----------------------------------------------------
/**
* @class
*
* Initialize a new instance of the PlatformInfo class.
* @public
* @constructor
*/
PlatformInfo = function (userAgent) {

  // Initialize properties.
  this.original = '';

  // Initialize this instance.
  if (userAgent) {
    this.initialize(userAgent);
  }
};

/**
* Initialize this instance according to the specified user agent string.
* @private
* @param    {string}    userAgent       UserAgent string.
*/
PlatformInfo.prototype.initialize = function (userAgent) {

  var type = '';
  var platform = '';
  var architecture = '';
  var version = '';
  var result = null;
  var mobile = /iphone|ipod|ipad|android|windows phone|silk|blackberry|symbian|mobile/;
  var pc = /windows|mac|linux/;
  var array;

  // Normalize useragent string to lowercase.
  userAgent = userAgent.toLowerCase();

  // Detect platform type.
  result = mobile.exec(userAgent);
  if (result) {
    if (userAgent.indexOf('silk') >= 0) {
      // Silk
      type = 'tablet';
      platform = 'android';
    } else {
      if ((userAgent.indexOf('android') < 0 || userAgent.indexOf('mobile') >= 0) &&
        (userAgent.indexOf('ipad') < 0)) {
        // Android phone, iPhone, iPod, Windows Phone, BlackBerry, Symbian
        type = 'mobile';
      } else if (userAgent.indexOf('opera') < 0) {
        // Android tablet, iPad
        type = 'tablet';
      } else {
        type = 'unknown';
      }

      platform = result[0].replace(' ', '');
      switch (platform) {
        case 'iphone':
        case 'ipod':
        case 'ipad':
          platform = 'ios';
          array = /os ([\d_]+)/.exec(userAgent);
          version = array ? (array[1] || '').replace(/_/g, '.') : '';
          break;
        case 'android':
          array = /android ([\d.]+)/.exec(userAgent);
          version = array ? array[1] : '';
          break;
        case 'windowsphone':
          array = /os ([\d.]+)/.exec(userAgent);
          version = array ? array[1] : '';
          break;
      }

    }
  } else {
    if (userAgent.indexOf('windows') >= 0) {
      type = 'pc';
      platform = 'windows';

      // Windows NT x.x
      array = /windows nt ([\d\.]+)/.exec(userAgent);
      version = (array) ? array[1] : '';

      // Architecture.
      if (userAgent.indexOf('arm') >= 0) {
        architecture = 'arm';
      } else if (userAgent.indexOf('win64') >= 0) {
        if (userAgent.indexOf('ia64') >= 0) {
          architecture = 'ia64';
        } else {
          architecture = 'x64';
        }
      } else if (userAgent.indexOf('wow64') >= 0) {
        architecture = 'x64';
      } else {
        architecture = 'x86';
      }
    } else if (userAgent.indexOf('mac') >= 0) {
      type = 'pc';
      platform = 'osx';
      array = /os x ([\d_]+)/.exec(userAgent);
      version = array ? (array[1] || '').replace(/_/g, '.') : '';
      architecture = 'unknown';
    } else if (userAgent.indexOf('linux') >= 0) {
      type = 'pc';
      platform = 'linux';
      if (/x86_64|amd64/.test(userAgent)) {
        architecture = 'x64';
      } else if (/i386|i686|x86/.test(userAgent)) {
        architecture = 'x86';
      } else {
        architecture = 'unknown';
      }
    } else {
      // Unknown platform.
      type = 'unknown';
      platform = 'unknown';
      architecture = 'unknown';
    }
  }

  // Set properties. 
  this.type = type;
  this.os = platform;
  this.version = new Version(version);
  this.architecture = architecture;

};

/**
* Whether the current platform is equal to the specified platform.
* @public
* @param    {string}    type    Platform type string.
* @return   {boolean}   Whether the current platform is equal to the specified platform.
*/
PlatformInfo.prototype.is = function (name) {

  if (typeof name === 'string') {
    name = name.toLowerCase();
    return ((name === this.original) || (name === this.type));
  } else {
    return false;
  }

};

module.exports = PlatformInfo;