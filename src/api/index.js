import axios from 'axios'
import {
  base
} from './api'
import Qs from 'qs'

//get
/* 
 *params有两个参数
 *url 请求接口路径，如果是restful,需要把参数拼接在接口后面传过来
 *query 请求参数，没有就穿个空对象
 */
export const getApi = params => {
  return axios.get(`${base}${params.url}`, {
    params: params.query || {}
  }).then(res => res.data);
};

// post接口
export const postApi = params => {
  return axios.post(`${base}${params.url}`, Qs.stringify(params.query || {})).then(res => res.data);
};