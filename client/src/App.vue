<template>
  <div id="app">
    <Header></Header>
    <Form></Form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "./components/Form.vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: { Form, Header }
});
</script>

<style lang="sass">
body
  background: rgb(9,121,68)
  background-position: center
  background-size: cover
  background-image: url("https://unsplash.com/photos/_3l5B_4E_u0/download?force=true&w=1920")
  min-height: 100vh
  margin: 0
  padding: 0
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
  *,
  *::after,
  *::before
    box-sizing: inherit

#app
  max-width: 1000px
  padding: 50px
  backdrop-filter: blur(10px) brightness(0.8)
  border-radius: 7px
  background-color: rgba(255, 255,255 ,0.3 )
  box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.75)
  border: 3px inset rgba(255,255,255, .2)
  animation: glass
  animation-duration: 1s
  animation-timing-function: ease-out


@keyframes glass
  0%
    backdrop-filter: blur(0.1px) brightness(0.9)
    box-shadow: 0px 0px 0px -1px rgba(0,0,0,1)
    transform: scale(0.98)
    filter: blur(1px)
  100%
    backdrop-filter: blur(10px) brightness(0.8)
    box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.75)
</style>
