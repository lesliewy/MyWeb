function isBlank(str){
   var re = /^\s+$/;
   return str == null || str == "" || re.exec(str);
}

/*
function getHeight(){
   return $("#sidebar").height($(window).height());
}
*/