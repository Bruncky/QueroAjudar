import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Plugins } from '@capacitor/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const { Browser } = Plugins;

const Home: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                { Browser.open({ url: 'https://app.queroajudar.org/', windowName: "_self" }) }
            </IonContent>
        </IonPage>
    );
};

export default Home;
