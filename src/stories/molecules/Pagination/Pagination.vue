<template>
  <ul class="uk-pagination">
    <li><my-button label="Anterior" @click="$emit('previous')" /></li>
    <li class="uk-margin-auto-left"><my-button label="Próximo" @click="$emit('next')" /></li>
  </ul>
</template>

<script>
import MyButton from '../../atoms/Button/Button.vue'

export default {
  name: 'my-pagination',
  components: { MyButton },
  props: {
    next: {
      type: Boolean,
      required: true
    },
    previous: {
      type: Boolean,
      required: true
    }
  }
}
</script>
