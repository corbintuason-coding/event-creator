/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import { createApp } from 'vue'

window.Vue = require('vue').default;

import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './layouts/App.vue';

export const app = createApp(App);


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
app.component('DatePicker', Datepicker);

app.use(VueSweetalert2);
app.use(VueAxios, axios);
import { router } from './router';
import { store } from './store';
app.use(store);
app.use(router);

import responseInterceptor from './interceptors/response-interceptor';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; 




responseInterceptor();

app.mount('#app')

