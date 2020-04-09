import { IonContent, IonPage } from '@ionic/react';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { Plugins } from '@capacitor/core';
import React from 'react';
import './Home.css';

// const changeStatusBarStyle = () => {
//     StatusBar.setOverlaysWebView({ overlay: true });
//
//     StatusBar.setStyle({
//         style: StatusBarStyle.Light
//     });
//
//     StatusBar.setBackgroundColor({
//         color: '#FFFFFF'
//     });
//
//     StatusBar.show();
// };

const changeStatusBarStyle = () => {
    StatusBar.overlaysWebView(true);

    StatusBar.backgroundColorByHexString('#FFFFFF');

    StatusBar.styleDefault();

    // StatusBar.show();
};

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { changeStatusBarStyle() }
                {
                    InAppBrowser.create(
                        'https://app.queroajudar.org/',
                        '_blank',
                        `location=no,
                         toolbar=no,
                         transitionstyle=crossdissolve`
                    )
                }
                { StatusBar.show() }
            </IonContent>
        </IonPage>
    );
};

export default Home;
