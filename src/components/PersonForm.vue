<template>
<form v-on:submit.prevent="submit" class="form">

  <label for="name">Name:</label>
  <input v-model="name" id="name" type="text" required />

  <button>Add Person</button>
</form>
</template>

<script>
export default {
  name: 'PersonForm',

  props: {
    handleSubmit: {
      type: Function,
      default() {
        return () => {}
      }
    }
  },

  data() {
    return {
      name: '',
    }
  },

  methods: {
    submit() {
      this.handleSubmit({ name: this.name })
      this.resetFields()
    },
    resetFields() {
      this.name = ''
    }
  }
}
</script>

<style>
.form {
  margin: 10;
  padding: 10;
}
</style>
