import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App, {
    router,
    store,
    render: h => h(App)
});

app.mount('#app');