<template>
  <div id="app">
    <header>
      <h1>One Month's Time</h1>
      <h2>Hold your future self accountable.</h2>
    </header>
    <form>
      <label for="email">First Name</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email.."
        required
      />
      <label for="content">Subject</label>
      <textarea
        id="content"
        name="content"
        placeholder="Write something.."
        required
      ></textarea>

      <label for="pswd">This data is sensitive.</label>
      <input type="checkbox" id="pswd" name="pswd" />
      <input type="submit" value="Send in one month" />
      <input type="submit" value="Send in one week" />
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
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
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
  backdrop-filter: blur(10px) brightness(0.8)
  border-radius: 7px
  background-color: rgba(255, 255,255 ,0.3 )
  box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.75)
  border: 3px inset rgba(255,255,255, .2)
  animation: glass
  animation-duration: 1s
  animation-timing-function: ease-out

header
  h1
    margin: 0
    margin-bottom: -10px
    font-size: 3.5em
    padding: 0
    font-family: 'Baloo Da 2', cursive
  h2
    margin-top: 0

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
