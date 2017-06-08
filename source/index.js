var BrowserInfo = require("./browserinfo.js");
var PlatformInfo = require("./platforminfo.js");
var UserAgent = {};

UserAgent.parse = function (userAgent) {
  return {
    browser: new BrowserInfo(userAgent),
    platform: new PlatformInfo(userAgent)
  };
};

UserAgent.express = function (request, response, next) {
  next();
};

module.exports = UserAgent;