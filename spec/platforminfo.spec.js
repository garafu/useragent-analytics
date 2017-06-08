var PlatformInfo = require("../source/platforminfo.js");
var PlatformType = require("../source/platformtype.js");
var OsType = require("../source/ostype.js");
var ArchitectureType = require("../source/architecturetype.js");

describe('PlatformInfo class\'s ', function () {
  var platform;

  beforeEach(function () {
    platform = new PlatformInfo();
  });

  describe('"initialize" private method', function () {
    var userAgent;

    describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is "6.0"', function () {
        expect(platform.version.original).toBe('6.0');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/26.0.1410.53 Mobile/10B350 Safari/8536.25"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_4 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/26.0.1410.53 Mobile/10B350 Safari/8536.25';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is "6.1.4"', function () {
        expect(platform.version.original).toBe('6.1.4');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.4.2 Mobile/10A523 Safari/8536.25"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mercury/7.4.2 Mobile/10A523 Safari/8536.25';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is "6.0.1"', function () {
        expect(platform.version.original).toBe('6.0.1');
      });

    });

    describe('when userAgent is "Opera/9.80 (iPhone; Opera Mini/7.0.5/29.3709; U; ja) Presto/2.8.119 Version/11.10n/11.10"', function () {

      beforeEach(function () {
        userAgent = 'Opera/9.80 (iPhone; Opera Mini/7.0.5/29.3709; U; ja) Presto/2.8.119 Version/11.10n/11.10';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is ""', function () {
        expect(platform.version.toString()).toBe(null);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (iPod; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is "5.0.1"', function () {
        expect(platform.version.original).toBe('5.0.1');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "tablet"', function () {
        expect(platform.type).toBe(PlatformType.TABLET);
      });

      it('detect that platform os is "ios"', function () {
        expect(platform.os).toBe(OsType.IOS);
      });

      it('detect that platform version is "6.0"', function () {
        expect(platform.version.original).toBe('6.0');
      });

    });

    describe('when userAgent is "Opera/9.80 (Android 2.1-update1; Linux; Opera Mobi/ADR-1104201100; U; en) Presto/2.7.81 Version/11.00"', function () {

      beforeEach(function () {
        userAgent = 'Opera/9.80 (Android 2.1-update1; Linux; Opera Mobi/ADR-1104201100; U; en) Presto/2.7.81 Version/11.00';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "unknown"', function () {
        expect(platform.type).toBe(PlatformType.UNKNOWN);
      });

      it('detect that platform os is "android"', function () {
        expect(platform.os).toBe(OsType.ANDROID);
      });

      it('detect that platform version is "2.1"', function () {
        expect(platform.version.original).toBe('2.1');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "android"', function () {
        expect(platform.os).toBe(OsType.ANDROID);
      });

      it('detect that platform version is "2.2.1"', function () {
        expect(platform.version.original).toBe('2.2.1');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "android"', function () {
        expect(platform.os).toBe(OsType.ANDROID);
      });

      it('detect that platform version is "2.3.4"', function () {
        expect(platform.version.original).toBe('2.3.4');
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "tablet"', function () {
        expect(platform.type).toBe(PlatformType.TABLET);
      });

      it('detect that platform os is "android"', function () {
        expect(platform.os).toBe(OsType.ANDROID);
      });

      it('detect that platform version is "3.2"', function () {
        expect(platform.version.original).toBe('3.2');
      });

    });

    // Kindle Fire
    describe('when userAgent is "Mozilla/5.0 (Linux; U; ja-jp; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.4 Safari/535.19 Silk-Accelerated=true"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Linux; U; ja-jp; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.4 Safari/535.19 Silk-Accelerated=true';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "tablet"', function () {
        expect(platform.type).toBe(PlatformType.TABLET);
      });

      it('detect that platform os is "android"', function () {
        expect(platform.os).toBe(OsType.ANDROID);
      });

      it('detect that platform version is ""', function () {
        expect(platform.version.original).toBe(null);
      });

    });

    // Windows Phone
    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform type is "mobile"', function () {
        expect(platform.type).toBe(PlatformType.MOBILE);
      });

      it('detect that platform os is "windowsphone"', function () {
        expect(platform.os).toBe(OsType.WINDOWS_PHONE);
      });

      it('detect that platform version is "7.5"', function () {
        expect(platform.version.original).toBe('7.5');
      });

    });

    describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.41115)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "5.2".', function () {
        expect(platform.version.toString()).toBe('5.2');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.0".', function () {
        expect(platform.version.toString()).toBe('6.0');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; EasyBits GO v1.0; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "5.1".', function () {
        expect(platform.version.toString()).toBe('5.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.1".', function () {
        expect(platform.version.toString()).toBe('6.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; Tablet PC 2.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; Tablet PC 2.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.1".', function () {
        expect(platform.version.toString()).toBe('6.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.2".', function () {
        expect(platform.version.toString()).toBe('6.2');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.2".', function () {
        expect(platform.version.toString()).toBe('6.2');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X64);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.2".', function () {
        expect(platform.version.toString()).toBe('6.2');
      });

      it('detect that platform is x64.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X64);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.2".', function () {
        expect(platform.version.toString()).toBe('6.2');
      });

      it('detect that platform is arm.', function () {
        expect(platform.architecture).toBe(ArchitectureType.ARM);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.1".', function () {
        expect(platform.version.toString()).toBe('6.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.16 Safari/534.24"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.16 Safari/534.24';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.0".', function () {
        expect(platform.version.toString()).toBe('6.0');
      });

      it('detect that platform is x64.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X64);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.16 Safari/534.24"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.16 Safari/534.24';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.0".', function () {
        expect(platform.version.toString()).toBe('6.0');
      });

      it('detect that platform is x64.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X64);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.1; rv:18.0) Gecko/20100101 Firefox/18.0';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.1".', function () {
        expect(platform.version.toString()).toBe('6.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8) AppleWebKit/536.25 (KHTML, like Gecko) Version/6.0 Safari/536.25';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "osx".', function () {
        expect(platform.os).toBe(OsType.OSX);
      });

      it('detect that platform version is "10.8".', function () {
        expect(platform.version.toString()).toBe('10.8');
      });

      it('detect that platform is "unknown".', function () {
        expect(platform.architecture).toBe(ArchitectureType.UNKNOWN);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36 OPR/29.0.1795.47"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36 OPR/29.0.1795.47';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "6.3".', function () {
        expect(platform.version.toString()).toBe('6.3');
      });

      it('detect that platform is x64.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X64);
      });

    });

    describe('when userAgent is "Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1"', function () {

      beforeEach(function () {
        userAgent = 'Opera/9.62 (Windows NT 5.1; U; ja) Presto/2.1.1';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "windows".', function () {
        expect(platform.os).toBe(OsType.WINDOWS);
      });

      it('detect that platform version is "5.1".', function () {
        expect(platform.version.toString()).toBe('5.1');
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

    describe('when userAgent is "Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54"', function () {

      beforeEach(function () {
        userAgent = 'Mozilla/5.0 (X11; Linux i686; U; cs) Opera 8.54';
        platform.initialize(userAgent);
      });

      afterEach(function () {
      });

      it('detect that platform is "pc".', function () {
        expect(platform.type).toBe(PlatformType.PC);
      });

      it('detect that platform is "linux".', function () {
        expect(platform.os).toBe(OsType.LINUX);
      });

      it('detect that platform version is "".', function () {
        expect(platform.version.toString()).toBe(null);
      });

      it('detect that platform is x86.', function () {
        expect(platform.architecture).toBe(ArchitectureType.X86);
      });

    });

  });

});

