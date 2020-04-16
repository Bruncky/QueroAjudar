import { Plugins, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

export const changeStatusbar = () => {
    StatusBar.setOverlaysWebView({
        overlay: true
    });

    StatusBar.setBackgroundColor({
        color: "#FFFFFF"
    });

    StatusBar.show();
};
