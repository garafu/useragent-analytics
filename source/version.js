var Version;

// ----------------------------------------------------
// Version class.
// ----------------------------------------------------
/**
* @class
*
* Initialize a new instance of the Version class.
* @public
* @constructor
* @param    {string}    version     Version string like "1.2.3.4".
*/
Version = function (version) {

  // Initialize properties.
  this.original = null;
  this.major = null;
  this.minor = null;
  this.build = null;
  this.revision = null;

  // Initialize this instance.
  if (version) {
    this.initialize(version);
  }

};
Version.prototype.major = '';

/**
* Initialize this instance according to the version string.
* @private
* @param    {string}    String indicating version.
*/
Version.prototype.initialize = function (version) {

  var arr = version.split('.');

  this.original = version;
  this.major = (arr && arr[0]) ? parseInt(arr[0], 10) : null;
  this.minor = (arr && arr[1]) ? parseInt(arr[1], 10) : null;
  this.build = (arr && arr[2]) ? parseInt(arr[2], 10) : null;
  this.revision = (arr && arr[3]) ? parseInt(arr[3], 10) : null;

};

/**
* Whether the version is equal or not.
* @public
* @param    {number}    major       Major version number.
* @param    {number}    [minor]     Minor version number.
* @param    {number}    [build]     Build version number.
* @param    {number}    [revision]  Revision version number.
* @return   {boolean}   Whether the version is equal to the specified version.
*/
Version.prototype.isEqual = function (major, minor, build, revision) {

  if (typeof major !== 'number') {
    return false;
  }
  if (typeof minor !== 'number') {
    return (this.major === major);
  }
  if (typeof build !== 'number') {
    return (this.major === major && this.minor === minor);
  }
  if (typeof revision !== 'number') {
    return (this.major === major && this.minor === minor && this.build === build);
  }
  return (this.major === major && this.minor === minor &&
    this.build === build && this.revision === revision);
};

/**
* Whether the version is or less than the specified versions.
* @public
* @param    {number}    major       Major version number.
* @param    {number}    [minor]     Minor version number.
* @param    {number}    [build]     Build version number.
* @param    {number}    [revision]  Revision version number.
* @return   {boolean}   Whether the version is or less than the specified version.
*/
Version.prototype.isOrLess = function (major, minor, build, revision) {

  if (typeof major !== 'number') {
    return false;
  }
  if (this.major !== major) {
    return (this.major < major);
  }

  if (typeof minor !== 'number') {
    return true;
  }
  if (this.minor !== minor) {
    return (this.minor < minor);
  }

  if (typeof build !== 'number') {
    return true;
  }
  if (this.build !== build) {
    return (this.build < build);
  }

  if (typeof revision !== 'number') {
    return true;
  }
  if (this.revision !== revision) {
    return (this.revision < revision);
  }

  return true;
};

/**
* Whether the version is less than the specfied version.
* @public
* @param    {number}    major       Major version number.
* @param    {number}    [minor]     Minor version number.
* @param    {number}    [build]     Build version number.
* @param    {number}    [revision]  Revision version number.
* @return   {boolean}   Whether the version is less than the specified version.
*/
Version.prototype.isLessThan = function (major, minor, build, revision) {

  if (typeof major !== 'number') {
    return false;
  }
  if (this.major !== major) {
    return (this.major < major);
  }

  if (typeof minor !== 'number') {
    return false;
  }
  if (this.minor !== minor) {
    return (this.minor < minor);
  }

  if (typeof build !== 'number') {
    return false;
  }
  if (this.build !== build) {
    return (this.build < build);
  }

  if (typeof revision !== 'number') {
    return false;
  }
  if (this.revision !== revision) {
    return (this.revision < revision);
  }

  return false;
};

/**
* Whether the version is or more than the specfied version.
* @public
* @param    {number}    major       Major version number.
* @param    {number}    [minor]     Minor version number.
* @param    {number}    [build]     Build version number.
* @param    {number}    [revision]  Revision version number.
* @return   {boolean}   Whether the version is or more than the specified version.
*/
Version.prototype.isOrMore = function (major, minor, build, revision) {

  if (typeof major !== 'number') {
    return false;
  }
  if (this.major !== major) {
    return (this.major > major);
  }

  if (typeof minor !== 'number') {
    return true;
  }
  if (this.minor !== minor) {
    return (this.minor > minor);
  }

  if (typeof build !== 'number') {
    return true;
  }
  if (this.build !== build) {
    return (this.build > build);
  }

  if (typeof revision !== 'number') {
    return true;
  }
  if (this.revision !== revision) {
    return (this.revision > revision);
  }

  return true;
};

/**
* Whether the version is more than the specfied version.
* @public
* @param    {number}    major       Major version number.
* @param    {number}    [minor]     Minor version number.
* @param    {number}    [build]     Build version number.
* @param    {number}    [revision]  Revision version number.
* @return   {boolean}   Whether the version is more than the specified version.
*/
Version.prototype.isMoreThan = function (major, minor, build, revision) {

  if (typeof major !== 'number') {
    return false;
  }
  if (this.major !== major) {
    return (this.major > major);
  }

  if (typeof minor !== 'number') {
    return false;
  }
  if (this.minor !== minor) {
    return (this.minor > minor);
  }

  if (typeof build !== 'number') {
    return false;
  }
  if (this.build !== build) {
    return (this.build > build);
  }

  if (typeof revision !== 'number') {
    return false;
  }
  if (this.revision !== revision) {
    return (this.revision > revision);
  }

  return false;
};

/**
* Get the version string.
* @public
* @return   {string}    Version string.
*/
Version.prototype.toString = function () {
  return this.original;
};

module.exports = Version;