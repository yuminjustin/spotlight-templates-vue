/* polyfill IE */
import '@babel/polyfill'
/* vonder*/
import Vue from 'vue'
import Hello from 'C/hello'
/* styles*/
import "B/assets/css/reset.css"
import "B/assets/css/page.css"

Vue.config.productionTip = false

new Vue({
    el: '#app',
    template: '<Hello/>',
    components: {
        Hello
    }
})



/* webpack hot reload */
if (module.hot) {
    module.hot.accept();
}
