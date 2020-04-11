import { IonContent, IonPage } from '@ionic/react';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import React from 'react';
import './Home.css';

const loadIAB = () => {
    InAppBrowser.create(
        'https://app.queroajudar.org/',
        '_blank',
        'location=no,fullscreen=no,toolbar=no,transitionstyle=crossdissolve'
    );
};

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { [loadIAB()] }
            </IonContent>
        </IonPage>
    );
};

export default Home;
