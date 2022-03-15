/** Do NOT use this for 
 *  starting plugins in
 *  storybook go to
 *  ../.storybook/preview.js */
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

createApp(App).mount("#app");
