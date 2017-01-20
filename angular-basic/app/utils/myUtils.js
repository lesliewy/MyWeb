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
   loadMore(window);
   /* 监听滚动事件, 滚动条每滚动下就会执行 */
   $(window).scroll(function() {
      console.log("this is $().scroll.");
      // 当滚动到最底部以上100像素时， 加载新内容  scrollTop: 滚动条顶部已滚动的长度.
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

/*
 构造li列表.
<li>
      <p> poemname </p>
      <p>[category_name] author_name</p>
      <p>
         <span>
            poembrief
         </span>
         <span>
            <p>poemcontent</p>
            <p>诗词鉴赏</p>
            <p>poemappreciation</p>
         </span>
         <a>显示全部</a>
      </p>
   </li>

*/
function loadMore(randPoem) {
   $.ajax({
      url: '/solr/randquery',
      dataType: 'json',
      success: function(result) {
         if (typeof result == 'object') {
            var json = result.response.docs;
            var poem, poemname, poemcontent;
            // 简要说明的长度.
            var poembrieflength = 50;
            // 一次获取诗词数.
            var numload = 10;
            // 已经存在的li数.
            var numofli = $('#stage > li').length;
            for (var i = 0, l = json.length; i < l; i++) {
               poem = json[i];
               var index = numofli + i;
               var newli = document.createElement("li");
               var poemnamep = document.createElement("p");
               poemnamep.setAttribute("class", "poemname");
               poemnamep.innerHTML = poem.poem_name;

               var authorp = document.createElement("p");
               authorp.setAttribute("class", "authorname");
               authorp.innerHTML = poem.category_name + " " + poem.author_name;

               var poemp = document.createElement("p");
               var poembriefspan = document.createElement("span");
               poembriefspan.setAttribute("class", "poembrief");
               poembriefspan.innerHTML = poem.poem_content.slice(0, poembrieflength);

               var poemallspan = document.createElement("span");
               poemallspan.style.setProperty("display", "none");
               poemallspan.setAttribute("class", "poemall");
               var poemcontentp = document.createElement("p");
               poemcontentp.setAttribute("class", "poemcontent");
               poemcontentp.innerHTML = poem.poem_content;
               var poemappreciationtitlep = document.createElement("p");
               poemappreciationtitlep.setAttribute("class", "poemappreciationtitle");
               poemappreciationtitlep.innerHTML = "诗词鉴赏";
               var poemappreciationp = document.createElement("p");
               poemappreciationp.setAttribute("class", "poemappreciation");
               poemappreciationp.innerHTML = poem.poem_appreciation;

               poemallspan.appendChild(poemcontentp);
               poemallspan.appendChild(poemappreciationtitlep);
               poemallspan.appendChild(poemappreciationp);


               var togglebtn = document.createElement("a");
               togglebtn.innerHTML = poem.poem_content.length > poembrieflength ? "...显示全部" : "";
               // 为每个a设置index.
               togglebtn.setAttribute("index", index);
               togglebtn.setAttribute("href", "javascript:void(0);");
               // 设置span的显示与隐藏及<a>的内容.
               togglebtn.onclick = function() {
                  var index = this.getAttribute("index");
                  if (this.innerHTML == "...显示全部") {
                     this.innerHTML = "收起";
                     $('#stage > li').eq(index).find('span').eq(0).css("display", "none");
                     $('#stage > li').eq(index).find('span').eq(1).css("display", "inline");
                     console.log("index: " + this.getAttribute("index"));
                  } else {
                     this.innerHTML = "...显示全部";
                     $('#stage > li').eq(index).find('span').eq(0).css("display", "inline");
                     $('#stage > li').eq(index).find('span').eq(1).css("display", "none");
                     console.log("index: " + this.getAttribute("index"));
                  }
               }
               poemp.appendChild(poembriefspan);
               poemp.appendChild(poemallspan);
               poemp.appendChild(togglebtn);

               newli.appendChild(poemnamep);
               newli.appendChild(authorp);
               newli.appendChild(poemp);
               $('#stage').append(newli);
            }
         }
         randPoem.loaded = false;
      }
   });
}

/**
   跳转到指定id，避免使用a导致url变化，页面刷新.
*/
function goto(id) {
   document.getElementById(id).scrollIntoView(true);
}

