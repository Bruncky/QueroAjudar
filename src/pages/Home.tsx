import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { loadIAB } from '../components/InAppBrowser.tsx'
import './Home.css';

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
