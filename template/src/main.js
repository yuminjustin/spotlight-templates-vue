import Vue from 'vue'
import Hello from 'C/hello'

import "@/assets/css/reset.css"
import "@/assets/css/page.css"


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