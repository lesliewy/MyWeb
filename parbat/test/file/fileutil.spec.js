var fileutil = require('../../lib/file/fileutil');
var expect = require('chai').expect


describe('test', function () {
  describe('add', function () {
    it('add should success', function () {
      expect(fileutil.add(5, 2)).to.be.equal(7);
    });
  });
  describe('limit', function () {
    it('limit should return num self', function () {
      expect(fileutil.limit(5)).to.be.equal(5);
    });
    it('limit should return 0', function () {
      expect(fileutil.limit(-5)).to.be.equal(0);
    });
  });
});

describe('file', function () {
  describe('isExistFile', function () {
    it('isExistFile should work success', function () {
      expect(fileutil.isAllExist([])).to.be.equal(false);
      expect(fileutil.isAllExist(["/Users/leslie/MyProjects/GitHub/MyWeb/parbat/karma.conf.js"])).to.be.equal(true);
      expect(fileutil.isAllExist(["/Users/leslie/MyProjects/GitHub/MyWeb/parbat/karma.conf.js", "bbb"])).to.be.equal(false);
    });
  });
  describe('isDir', function () {
    it('isDir should work success.', function () {
      expect(fileutil.isDir("")).to.be.equal(false);
      expect(fileutil.isDir("aaa")).to.be.equal(false);
      expect(fileutil.isDir("/home")).to.be.equal(true);
    })
  });
  describe('isBlankDir', function () {
    it('isBlankDir should work success.', function () {
      expect(fileutil.isBlankDir("")).to.be.equal(false);
      expect(fileutil.isBlankDir("aaa")).to.be.equal(false);
      expect(fileutil.isBlankDir("/Users/leslie")).to.be.equal(false);
      expect(fileutil.isBlankDir("/Users/leslie/Temp1/2019/0314/3")).to.be.equal(true)
    })
  });
})
