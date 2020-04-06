import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { InAppBrowser } from '@ionic-native/in-app-browser';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { InAppBrowser.create('https://app.queroajudar.org/', '_self') }
            </IonContent>
        </IonPage>
    );
};

export default Home;
