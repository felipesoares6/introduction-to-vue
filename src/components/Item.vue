<template>
  <li class="item">
    {{item.name}}
  </li>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style>
  .item {
    margin: 10px;
  }
</style>
