import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false

import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
