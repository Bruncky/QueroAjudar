import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { InAppBrowser.create('https://app.queroajudar.org/', '_self', 'location=no') }
            </IonContent>
        </IonPage>
    );
};

export default Home;
