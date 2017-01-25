'use strict';
define(['angular', '../stock.module'], function(angular) {
   angular.module('stock').
   component('calLimit', {
      templateUrl: 'stock/calLimit/calLimit.template.html',
      controller: [
         function calLimitController() {
            this.radioControl = function(radioSelected) {
               var type1 = document.getElementById("type1");
               var type2 = document.getElementById("type2");
               if (type1 == radioSelected) {
                  type2.checked = false;
               }
               if (type2 == radioSelected) {
                  type1.checked = false;
               }

               var proption1 = document.getElementById("proption1");
               var proption2 = document.getElementById("proption2");
               if (proption1 == radioSelected) {
                  proption2.checked = false;
               }
               if (proption2 == radioSelected) {
                  proption1.checked = false;
               }

               var updown1 = document.getElementById("updown1");
               var updown2 = document.getElementById("updown2");
               if (updown1 == radioSelected) {
                  updown2.checked = false;
               }
               if (updown2 == radioSelected) {
                  updown1.checked = false;
               }
            };

            this.calPrice = function() {
               var type1 = document.getElementById("type1");
               var type2 = document.getElementById("type2");
               var proption1 = document.getElementById("proption1");
               var proption2 = document.getElementById("proption2");
               var updown1 = document.getElementById("updown1");
               var updown2 = document.getElementById("updown2");

               var price = document.getElementById("price").value;
               var numUpDown = document.getElementById("numUpDown").value;
               /* 计算比例 */
               var proption = 1.1;
               if (proption1.checked && updown1.checked) {
                  proption = 1.1;
               } else if (proption1.checked && updown2.checked) {
                  proption = 0.9;
               } else if (proption2.checked && updown1.checked) {
                  proption = 1.05;
               } else if (proption2.checked && updown2.checked) {
                  proption = 0.95;
               }

               console.log("proption: " + proption);
               console.log("price: " + price);
               console.log("numUpDown: " + numUpDown);

               var tempPrice = price;
               var preTempPrice = price;
               var tempProption = 0;
               var tempProptionStr = "";

               var resultValue = "";

               for (var i = 1; i <= numUpDown; i++) {
                  preTempPrice = tempPrice;
                  tempPrice = (preTempPrice * proption).toFixed(2);
                  tempProption = (tempPrice / preTempPrice - 1);
                  tempProptionStr = (tempProption * 100).toFixed(2) + "%";
                  resultValue += i + ": " + tempPrice + "   " + tempProptionStr + "<br/>";
                  console.log(i + ": " + tempPrice);
               }

               var result = document.getElementById("result");
               result.innerHTML = resultValue;
            };
         }
      ]
   });
});
