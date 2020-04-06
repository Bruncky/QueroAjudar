import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

const Home: React.FC = () => {
    Browser.open({ url: 'https://app.queroajudar.org/', windowName: "_self" });

    return (
        <IonPage>
        </IonPage>
    );
};

export default Home;
