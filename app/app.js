import Vue from 'nativescript-vue';

import Home from './components/Home';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

import { TNSFontIcon, fonticon } from './nativescript-fonticon';

//TNSFontIcon.debug = true;

TNSFontIcon.paths = {
    fa: './assets/font-awesome.css',
};
TNSFontIcon.loadCss();

import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "./nativescript-windowed-modal"

overrideModalViewMethod()
Vue.registerElement("ModalStack", () => ModalStack)
Vue.use(VueWindowedModal)

Vue.filter('fonticon', fonticon);
Vue.config.silent = true
new Vue({

    render: h => h('frame', [h(Home)])

}).$start();
