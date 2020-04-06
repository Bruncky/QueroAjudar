import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { Browser } = Plugins;
const { StatusBar } = Plugins;

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { StatusBar.hide() }
                { Browser.open({url: 'https://app.queroajudar.org/', windowName: '_self', presentationStyle: 'fullscreen'}) }
            </IonContent>
        </IonPage>
    );
};

export default Home;
