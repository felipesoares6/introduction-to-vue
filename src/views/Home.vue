<template>
<div>
  <div v-if="isLoading">Loading...</div>

  <List v-if="!isLoading" :items="people" />

  <PersonForm :handleSubmit="handleSubmit" />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import List from '@/components/List'
import PersonForm from '@/components/PersonForm'

export default {
  name: 'Home',

  components: {
    List,
    PersonForm
  },

  computed: {
    ...mapGetters([
      'isLoading',
      'people'
    ])
  },

  mounted() {
    this.getPeople()
  },

  methods: {
    ...mapActions([
      'getPeople',
      'addPerson'
    ]),
    handleSubmit(person) {
      this.addPerson(person)
    }
  }
}
</script>
