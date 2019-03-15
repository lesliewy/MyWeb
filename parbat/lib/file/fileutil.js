var fs = require('fs')

exports.add = function (x, y) {
  return x + y;
}

exports.limit = function (num) {
  if (num < 0) {
    return 0;
  }
  return num;
};


/**
 * 目录或者文件是否全部都存在.
 * @param {*} filepaths
 */
var isAllExist = exports.isAllExist = function (filepaths) {
  if (filepaths.length <= 0)
    return false;
  for (var index in filepaths) {
    if (!fs.existsSync(filepaths[index])) {
      return false;
    }
  }
  return true;
}

/**
 * 是否是目录
 * @param {*} dir
 */
var isDir = exports.isDir = function (dir) {
  if (!isAllExist([dir])) {
    return false;
  }
  return fs.lstatSync(dir).isDirectory();
}

/**
 * 是否是空目录
 * @param {} dir
 */
var isBlankDir = exports.isBlankDir = function (dir) {
  if (!isDir(dir)) {
    return false;
  }
  return fs.readdirSync(dir).length == 0;
}
