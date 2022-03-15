import MyNavbar from './Navbar.vue'

export default {
  title: 'organism/Navbar',
  component: MyNavbar
}

const Template = (args) => ({
  components: { MyNavbar },
  setup() {
    return { args }
  },
  template: '<my-navbar v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {}
