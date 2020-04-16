import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { loadIAB } from '../components/InAppBrowser';
import { changeStatusbar } from '../components/StatusBar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                { [changeStatusbar()] }
                { [loadIAB()] }
            </IonContent>
        </IonPage>
    );
};

export default Home;
