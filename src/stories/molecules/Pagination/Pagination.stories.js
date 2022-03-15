import MyPagination from './Pagination.vue'

export default {
  title: 'Molecules/Pagination',
  component: MyPagination
}

const Template = (args) => ({
  components: { MyPagination },
  setup() {
    return { args };
  },
  template: '<my-pagination v-bind="args" />'
})

export const Default = Template.bind({});
Default.args = {
  next: true,
  previous: true
}