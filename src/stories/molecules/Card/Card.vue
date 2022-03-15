<template>
  <div :class="['uk-grid-match', classList]" uk-grid>
    <div>
      <div :class="['uk-card uk-card-body', cardClassList]">
        <h3 class="uk-card-title">{{content.title}}</h3>
        <p>{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-card',
  props: {
    content: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: 'default'
    },
    hover: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '1-3'
    },
    greedSize: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    classList () {
      const classList = []
      if (this.width) classList.push(`uk-child-width-${this.width}@m`)
      if (this.greedSize) classList.push(`uk-grid-${this.greedSize}`)
      if (this.hover) classList.push('uk-card-hover')
      return classList
    },
    cardClassList () {
      const classList = [`uk-card-${this.color}`]
      return classList
    }
  }
}
</script>
