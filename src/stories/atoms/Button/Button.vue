<template>
  <button :class="['uk-button', classList]" :disabled="disabled" :title="label">{{ label }}</button>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      const classList = [`uk-button-${this.color}`]
      return classList
    }
  }
}
</script>
