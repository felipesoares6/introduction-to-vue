<template>
<ul class="list">
  <li
    is="Item"
    :key="item.name"
    v-for="item in items"
    :item="item"
  />
</ul>
</template>

<script>
import Item from './Item'

export default {
  name: 'List',

  components: {
    Item
  },

  data() {
    return {
      item: {}
    }
  },

  props: {
    items: {
      type: Array,
      default() {
        return [] 
      }

    }
  }
}
</script>

<style>
.list {
  list-style: none;
  margin: 0;
}
</style>
