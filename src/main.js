import { createApp } from 'vue';
import App from './app/App.vue';
import store from './app/store/index.js';

createApp(App).use(store).mount('#app');
