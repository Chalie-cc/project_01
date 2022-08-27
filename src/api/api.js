import axios from 'axios';

let testUrl = 'http://127.0.0.1:2998'; // 测试地址

export var base = testUrl;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   var token1 = ''
//   if (window.location.search) {
//     var str = window.location.search.substr(1);
//     token1 = str.split("=")[1];
//   }
//   // var token = localStorage.getItem('token') || token1 || '22e27a43ffe843f08325829a8a4349dd';
//   var token = 'efky789adfe88safd78iopk'
//   if (config.data) {
//     config.data = /token/g.test(config.data) ? config.data : config.data + '&token=' + token;
//   } else if (config.params) {
//     config.params['token'] = token;
//   }

//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });