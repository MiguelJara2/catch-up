import { createApp } from 'vue'
import './style.css'
import App from './app.vue';
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Material from '@primeuix/themes/material'
import {Avatar, Button, Card,Image ,Drawer, Menu, Menubar, SelectButton, Toolbar, Tooltip} from "primevue";


createApp(App)
    .use(PrimeVue, {ripple:true,theme:{preset:Material}})
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-avatar',Avatar)
    .component('pv-card',Card)
    .component('pv-image',Image)
    .component('pv-toolbar',Toolbar)
    .component('pv-menu',Menu)
    .component('pv-drawer',Drawer)
    .component('pv-menubar',Menubar)
    .directive('tooltip',Tooltip)
    .mount('#app')

