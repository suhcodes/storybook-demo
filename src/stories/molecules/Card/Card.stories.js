import MyCard from './Card.vue'

export default {
  title: 'Molecules/Card',
  component: MyCard,
  argTypes: {
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    label: { control: 'string' },
    hover: { control: 'boolean' },
  }
}

const Template = (args) => ({
  components: { MyCard },
  setup() {
    return { args };
  },
  template: '<my-card v-bind="args" />'
})

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  content: {
    title: 'Default',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  content: {
    title: 'Primary',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  content: {
    title: 'Secondary',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
}

export const Hover = Template.bind({});
Hover.args = {
  color: 'default',
  content: {
    title: 'Hover',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  hover: true
}
