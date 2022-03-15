import MyHome from './Home.vue'

export default {
  title: 'layouts/Home',
  component: MyHome
}

const Template = (args) => ({
  components: { MyHome },
  setup() {
    return { args }
  },
  template: '<my-home v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  pagination: { next: true, previous: true },
  search: '',
  cards: [{
    content: {
      title: 'Card Title',
      text: 'Card text paragraph.'
    }
  }]
}
