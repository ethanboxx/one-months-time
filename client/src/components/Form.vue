<template>
  <form action="http://localhost:3000/api/" method="post">
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

    <Password></Password>
    <input type="submit" name="week" value="Send in one month" />
    <input type="submit" name="month" value="Send in one week" />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import OneLineInput from "./form/OneLineInput.vue";
import Password from "./form/Password.vue";

export default Vue.extend({
  name: "Form",
  components: { OneLineInput, Password }
});
</script>

<style lang="sass">
input, textarea
  width: 100%
  border-radius: 5px
  border: none
  padding: 10px

textarea
  resize: vertical
  height: 200px

textarea, input, button, select
  margin: 10px 0
  font-family: inherit
  font-size: 16px

label
  font-size: 20px
</style>
