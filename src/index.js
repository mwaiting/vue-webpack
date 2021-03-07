import Vue from 'vue'
import App from './App.vue'

import './assets/style/base.css'
import './assets/style/reset.styl'
import './assets/img/admin.gif'

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)