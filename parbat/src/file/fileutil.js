//判断文件是否存在
function isExistFile(url) {
  var xmlHttp;
  if (window.ActiveXObject) {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  else if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }
  xmlHttp.open("post", url, false);
  xmlHttp.send();
  if (xmlHttp.readyStatus == 4) {
    if (xmlhttp.status == 200) return true;//url存在
    else if (xmlhttp.status == 404) return false;//url不存在
    else
      return false;//其他状态
  }
  return false;
}

function add(x, y) {
  return x + y;
}
