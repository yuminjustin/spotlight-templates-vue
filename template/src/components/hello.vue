<template>
  <div :class="style.hello">
      <h1>Hello, Vue!</h1>
      <img src="/static/image/white.png">
  </div>
</template>
<script>
import style from "B/assets/css/page.css"
export default {
    data(){
      return {
        style
      }
    }
}
</script>
