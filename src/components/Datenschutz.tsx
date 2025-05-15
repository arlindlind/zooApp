import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import './Datenschutz.css';

const Datenschutz: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Datenschutzerklärung</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">Home</IonButton>
            <IonButton routerLink="/datenschutz">Datenschutz</IonButton>
            <IonButton routerLink="/impressum">Impressum</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Datenschutzerklärung</h1>

        <h2>Einleitung</h2>
        <p>
          Mit dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung 
          personenbezogener Daten bei der Nutzung unserer Zoo-App.
        </p>

        <h2>Verantwortliche Stelle</h2>
        <p>
          Zoo-App Project<br />
          Entwickelt von:<br />
          Dion Lecaj<br />
          Arlind Bekiri<br />
          Mehmet Nadir Dere<br />
          Gabriele Logiurato<br />
          Schweiz<br />
          E-Mail: kontakt@zoo-app.com
        </p>

        <h2>Grundsatz</h2>
        <p>
          Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Gestützt auf 
          Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen 
          Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch 
          auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer 
          persönlichen Daten.
        </p>

        <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Personenbezogene Daten sind Informationen, die sich auf eine identifizierte 
          oder identifizierbare Person beziehen. Darunter fallen beispielsweise:
        </p>
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Standortdaten (falls Sie diese Funktion aktivieren)</li>
          <li>Nutzungsdaten der App</li>
        </ul>

        <h2>Zweck der Datenverarbeitung</h2>
        <p>
          Wir verarbeiten Ihre personenbezogenen Daten nur für folgende Zwecke:
        </p>
        <ul>
          <li>Bereitstellung und Optimierung der App-Funktionen</li>
          <li>Verbesserung der Benutzerfreundlichkeit</li>
          <li>Technische Administration</li>
        </ul>

        <h2>Datensicherheit</h2>
        <p>
          Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, 
          um Ihre personenbezogenen Daten gegen unbeabsichtigte oder unrechtmässige 
          Löschung, Veränderung oder gegen unbefugte Offenlegung oder unbefugten 
          Zugang zu schützen.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht:
        </p>
        <ul>
          <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
          <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
          <li>Die Löschung Ihrer Daten zu verlangen</li>
          <li>Der Datenverarbeitung zu widersprechen</li>
        </ul>

        <h2>Änderungen</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. 
          Die jeweils aktuelle Version wird in der App veröffentlicht.
        </p>

        <p className="last-updated">
          Letzte Aktualisierung: {new Date().toLocaleDateString('de-CH')}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Datenschutz; 