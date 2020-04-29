import Vue from 'vue';

import App from './app.vue'

var app = new Vue({
    render: function(h) {
        return h(App);
    }
}).$mount('#app');