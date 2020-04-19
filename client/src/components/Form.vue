<template>
  <form action="/api" method="post">
    <OneLineInput
      lable="Email"
      name="email"
      placeholder="Type your email.."
      type="email"
    ></OneLineInput>
    <label for="content">Subject</label>
    <textarea
      id="content"
      name="content"
      placeholder="Write something.."
      required
    ></textarea>

    <!-- <Password></Password> -->
    <div id="submits">
    <input type="submit" name="week" value="Send in one month" />
    <input type="submit" name="month" value="Send in one week" /></div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import OneLineInput from "./form/OneLineInput.vue";

export default Vue.extend({
  name: "Form",
  components: { OneLineInput }
});
</script>

<style lang="sass">
input, textarea
  width: 100%
  border-radius: 5px
  border: none
  padding: 10px

input[type="submit"]
  backdrop-filter: blur(10px) brightness(0.8)
  background-color: rgba(255, 255,255 ,0.3 )
  box-shadow: inset 0 2px 3px rgba(255,255,255,0.3), inset 0 -2px 3px rgba(0,0,0,0.3)
  width: 150px
  transition: .2s
  &:first-child
    border-radius: 6px 0 0 6px
  &:last-child
    border-radius: 0 6px 6px 0
  &:hover, &:active
    background-color: rgba(255, 255,255 ,0.5 )

textarea
  resize: vertical
  height: 200px

textarea, input:not([type="submit"])
  box-shadow: inset 0px 0px 6px 0px rgba(0,0,0,0.6), 0px 0px 6px 0px rgba(255,255,255,0.7)
  border: 1px solid rgba(0, 0, 0, 0.6)

textarea, input, button, select
  margin: 10px 0
  font-family: inherit
  font-size: 16px

label
  font-size: 20px

#submits
  display: flex
  justify-content: center

</style>
