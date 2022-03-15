import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: {},
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'danger', 'text', 'link'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'string' }
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary'
}

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  color: 'danger'
}

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  color: 'text'
}

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  color: 'link'
}
