<template>
  <div>
    <label for="pswd">
      <input
        v-model="showPasswordBox"
        class="checkbox"
        type="checkbox"
        id="pswd"
        name="pswd"
        checked="checked"
      />
      <OneLineInput
        v-if="showPasswordBox"
        lable="Password"
        name="password"
        placeholder="Type a password.."
        type="password"
      ></OneLineInput
      ><template v-else> This data is sensitive.</template>
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import OneLineInput from "./OneLineInput.vue";

export default Vue.extend({
  name: "Password",
  components: { OneLineInput },
  data: function() {
    return {
      showPasswordBox: false
    };
  }
});
</script>

<style scoped lang="sass">

label
  display: block
  position: relative
  padding-left: 35px
  margin-bottom: 12px
  cursor: pointer
  font-size: 22px
  user-select: none


/* Hide the browser's default checkbox */
label input
  position: absolute
  opacity: 0
  cursor: pointer
  height: 0
  width: 0


/* Create a custom checkbox */
.checkmark
  position: absolute
  top: 0
  left: 0
  height: 25px
  width: 25px
  background-color: #eee


/* On mouse-over, add a grey background color */
label:hover input ~ .checkmark
  background-color: #ccc


/* When the checkbox is checked, add a blue background */
label input:checked ~ .checkmark
  background-color: #2196f3


/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after
  content: ""
  position: absolute
  display: none


/* Show the checkmark when checked */
label input.checkbox:checked ~ .checkmark:after
  display: block


/* Style the checkmark/indicator */
label .checkmark:after
  left: 9px
  top: 5px
  width: 5px
  height: 10px
  border: solid white
  border-width: 0 3px 3px 0
  transform: rotate(45deg)
</style>
