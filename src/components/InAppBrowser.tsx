import { InAppBrowser } from '@ionic-native/in-app-browser';

export const loadIAB = () => {
    InAppBrowser.create(
        'https://app.queroajudar.org/',
        '_self',
        'location=no,fullscreen=no,toolbar=no,transitionstyle=crossdissolve'
    );
};
