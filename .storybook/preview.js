/** Make any global import here
 *  and use the app from @storybook/vue3
 *  to add vue plugins and such
 */
// import { app } from "@storybook/vue3"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}