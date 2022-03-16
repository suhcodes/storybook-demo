
<div align="center">
    <img width=150 height=150 src="./public/logo.png" title="demo" />
    <h1 style="margin-top: 0px">Demo
    </h1>
</div>

### Storybook Component Library Demo
The components meant to be consumed by Vue 3 Webapp Demo.

<br>

## Getting Started

**Prerequisites**
* NodeJS `16.13.2`
* NPM `8.3.1`
* Vue CLI `4.5.15`
<br>

**Project Structure**

New components are placed at the path ./src/stories and for each new component have 4 different files in its folder, those being:

* `MyComponentName.stories.js` **creates the Storybook documentation page and configures it**
* `MyComponentName.test.js` **creates the unit tests for the new component**
* `MyComponentName.vue` **component file, as will be imported on the webapp**
* `index.js` **local import and initializer**

```
components
└─── .storybook
│   │   main.js
│   │   preview-head.html
│   │   preview.js
│
└─── src / stories
│   │   assets
│   │   atoms
│   │   molecules
│   │   organisms
│   │   index.js
│   
└─── src / styles
│   │   bootstrap-sass
│   │   app.scss
│ 
└─── src / test
│   │   setup.js
│ 
│   .browserlistrc
│   .editorconfig
│   .eslintrc.js
│   .gitignore
│   babel.config.js
│   cypress.json
│   package-lock.json
│   package.json
│   readme.md
```

2. Component structure:

New components use Vue's options API, they have 3 different sections but the styles must only be added directly to the component's `.vue` file if they aren't going to be used from any other component in the library.

```vue
<template>
  <div class="my-scoped-class">Fireworks Component</div>
</template>
<script>
  export default {
    name: 'MyComponentName'
  }
</script>

<style scoped>
.my-scoped-class {
  display: block;
}
</style>
```

3. Story structure:

New stories are used to add the components to the Storybook instance, that allows the components to be displayed on the list and automatically generates a few resources to be able to change its properties.

Modifiers must use `args` to be added to the component. Every variant must have its own export binding it to the template and the template should always have `v-bind="args"` added to it.

```js
import MyComponentName from './MyComponentName.vue'

export default {
  title: 'Atoms/MyComponentName',
  component: MyComponentName
}

const Template = (args) => ({
  components: { MyComponentName },
  setup() {
    return { args }
  },
  template: '<my-component-name v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  type: 'default'
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger'
}
```

Storybook also has some settings files at the `./storybook` folder.
- `main.js` is where the configurations for finding and compiling the stories are placed, addons available for usage, specifies which framework is integrating with the library and webpack additional configurations.
- `preview-head.html` is imported into the html head tag, so if we needed to add any kind of imports or meta-tags to it we just have to add everything into this file.
- `preview.js` is used to globally import resources that need to be available for all the components, global styles are an example of this. All that we need to do that is add `import '../src/styles/app.scss'`

4. Using the library:

Import it as a dependency in the `package.json` file, to reference it as its a private repository use:

* Local file reference:

```json
{
  ...
  "components": "file:../components",
  ...
}
```

* Git repo reference:

```json
{
  ...
  "components": "git+ssh://git@github.com:suhcodes/storybook-demo.git#v1.0.0",
  ...
}
```

---

#### :tada: Components Library running!

![components]('./public/storybook.gif)
