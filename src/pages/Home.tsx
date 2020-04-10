import { IonContent, IonPage } from '@ionic/react';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { StatusBar } from '@ionic-native/status-bar';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import React from 'react';
import './Home.css';

const { StatusBar } = Plugins;

const changeStatusBarStyle = () => {
    StatusBar.setOverlaysWebView({ overlay: true });

    // StatusBar.setStyle({
    //     style: StatusBarStyle.Light
    // });

    // StatusBar.setBackgroundColor({
    //     color: '#FF0000'
    // });

    StatusBar.show();
};

// const changeStatusBarStyle = () => {
//     StatusBar.overlaysWebView(false);
//
//     StatusBar.backgroundColorByHexString('#FF0000');
//
//     StatusBar.styleDefault();
// };

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
            </IonContent>
        </IonPage>
    );
};

export default Home;
