<template>
  <div id="app">
    <h1>One Month's Time</h1>
    <h2>Hold your future self accountable.</h2>
    <form>
      <label for="email">First Name</label>
      <input type="email" id="email" name="email" placeholder="Your Email.." required />
      <label for="content">Subject</label>
      <textarea id="content" name="content" placeholder="Write something.." required></textarea>

      <label for="pswd">This data is sensitive.</label>
      <input type="checkbox" id="pswd" name="pswd" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {}
});
</script>

<style lang="sass">
body
  background: rgb(9,121,68)
  background-position: center
  background-size: cover
  background-image: url("square.png")
  min-height: 100vh
  margin: 0
  padding: 0
  padding-top: 30px
  box-sizing: border-box
  *,
  *::after,
  *::before
    box-sizing: inherit
input, textarea
  width: 100%
  border-radius: 5px
  border: none
  padding: 10px

textarea
  resize: vertical
  height: 200px

textarea, input, button, select
  font-family: inherit
  font-size: inherit

#app
  max-width: 1000px
  padding: 50px
  margin: 0 auto
  backdrop-filter: blur(10px) brightness(0.8)
  border-radius: 7px
  background-color: rgba(255, 255,255 ,0.3 )
  box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.75)

h1
  margin: 0
  padding: 10px
</style>
