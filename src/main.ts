import { createApp } from 'vue';
import { createPinia } from 'pinia';
// iconfont
import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
