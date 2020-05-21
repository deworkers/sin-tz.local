import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const axios = require('axios').default;

var store = new Vuex.Store({
    state: {
        content: {
            level2 : null,
            level3 : null,
            level4 : null
        }
    },
    mutations: {
        updateContent: function(state, payload) {
            state.content[payload.level] = payload.content;
        },
    },
    actions: {
        getContent: function (context, payload) {
            return new Promise(function(resolve) {
                axios({
                    method: 'get',
                    url: payload.link,
                    responseType: 'json'
                })
                .then(function (response) {
                    store.commit('updateContent', {
                        level: payload.level,
                        content: response.data
                    });
                    resolve();
                });
            });
        }
    }
})

import App from './app.vue'

var app = new Vue({
    store: store,
    render: function(h) {
        return h(App);
    }
}).$mount('#app');