function isBlank(str) {
   var re = /^\s+$/;
   return str == null || str == "" || re.exec(str);
}

/*
function getHeight(){
   return $("#sidebar").height($(window).height());
}
*/
function refreshRandPoems() {
   window.loaded = false;
   scrollListen();
}

function scrollListen() {
   $(window).scroll(function() {
      // 当滚动到最底部以上100像素时， 加载新内容  
      if ($(document).height() - $(window).scrollTop() - $(window).height() < 100) {
         // 防止重复请求. ajax异步返回后重新修改为false.
         if (window.loaded) {
            console.log("已请求啦.")
            return;
         }
         window.loaded = true;
         console.log("快到底了.");
         loadMore(window);
      }
   });
}

function loadMore(randPoem) {
   $.ajax({
      url: '/solr/randquery',
      dataType: 'json',
      success: function(result) {
         if (typeof result == 'object') {
            var json = result.response.docs;
            var poem;
            for (var i = 0, l = json.length; i < l; i++) {
               poem = json[i];
               var newli = document.createElement("li");
               newli.innerHTML = '<a href="/poem' + poem.poem_url + '">' + poem.poem_name + '</a>' +
                  '<p>' + poem.poem_content + '</p>';
               $('#stage').append(newli);
            }
         }
         randPoem.loaded = false;
      }
   });
}
