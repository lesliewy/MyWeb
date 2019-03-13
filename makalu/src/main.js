import Vue from 'vue';
import App from './components/example/app.vue';
import Decompilejar from './components/decompilejar/decompilejar.vue';
import './style/common.scss';
// 远程请求使用axios
import axios from 'axios'
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

new Vue({
  el: '#decompilejar',
  template: '<Decompilejar/>',
  components: { Decompilejar }
});
