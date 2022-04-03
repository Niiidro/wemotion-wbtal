import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { createClient } from 'villus';

const client = createClient({
  url: 'https://directus.wemotion-wbtal.ch/graphql', // your endpoint.
});

const app = createApp(App);

app.use(router);
app.use(client);
app.mount('#app');
