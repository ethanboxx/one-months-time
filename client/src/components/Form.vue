<template>
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
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Form"
});
</script>

<style scoped lang="sass">
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
</style>
