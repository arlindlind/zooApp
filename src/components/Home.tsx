import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zoo App</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">Home</IonButton>
            <IonButton routerLink="/datenschutz">Datenschutz</IonButton>
            <IonButton routerLink="/impressum">Impressum</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Willkommen in der Zoo App</h1>
        <p>Entdecken Sie die faszinierende Welt der Tiere!</p>
      </IonContent>
    </IonPage>
  );
};

export default Home; 