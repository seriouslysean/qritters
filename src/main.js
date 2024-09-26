import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import { createHead } from 'unhead';

import '~styles/reset.css';
import '~styles/style.css';

import App from './App.vue';

const head = createHead();

const routes = [
  { path: '/', component: () => import('~views/HomeView.vue') },
  {
    path: '/codex',
    component: () => import('~views/CodexView.vue'),
    children: [
      {
        path: '',
        name: 'QritterList',
        component: () => import('~views/QritterListView.vue'),
      },
      {
        path: ':slug',
        name: 'QritterDetail',
        component: () => import('~views/QritterDetailView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App)
  .use(router)
  .use(head);

app.mount('#app');

// Expose app instance on the window for debugging
window.app = app;
