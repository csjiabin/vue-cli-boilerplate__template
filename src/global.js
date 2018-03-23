import Vue from 'vue'
import '@style/index.less'
import axios from 'axios'

Vue.prototype.$http = axios

axios.defaults.timeout = 15000
