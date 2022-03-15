<template>
  <main>
    <my-navbar v-model="search" @update:modelValue="setValue" @search="$emit('search', search)" />
    <my-card v-for="(card, index) in cards" :key="index" class="uk-margin-top" :content="card.content" />
    <my-pagination
      class="uk-margin-top"
      :next="true"
      :previous="true"
      @previous="$emit('previous')"
      @next="$emit('next')" />
  </main>
</template>

<script>
import MyNavbar from '../../organisms/Navbar/Navbar.vue'
import MyCard from '../../molecules/Card/Card.vue'
import MyPagination from '../../molecules/Pagination/Pagination.vue'

export default {
  name: 'my-home',
  components: {
    MyNavbar,
    MyCard,
    MyPagination
  },
  props: {
    pagination: { type: Object },
    search: { type: String },
    cards: { type: Array }
  },
  methods: {
    setValue (value) {
      this.search = value
      console.log(this.search)
    }
  }
}
</script>