<template>
  <div>
    <label for="email">{{ lable }}: </label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "OneLineInput",
  props: {
    name: String,
    lable: String,
    placeholder: String,
    type: { type: String, default: "text" },
  },
});
</script>

<style scoped lang="sass">
div
  display: grid
  grid-auto-flow: column
  grid-template-columns: min-content auto
  & > *
    margin: auto
  label
    margin-right: 13px
  margin-bottom: 10px
</style>
