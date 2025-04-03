import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Impressum.css';

const Impressum: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rechtliche Hinweise</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Rechtliche Hinweise</h1>
        
        <h2>Kontaktadresse</h2>
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

        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
          Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
          welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
          Informationen entstanden sind, werden ausgeschlossen.
        </p>

        <h2>Datenschutzerklärung</h2>
        <p>
          Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die 
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat 
          jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor 
          Missbrauch ihrer persönlichen Daten.
        </p>
        <p>
          Die Nutzung unserer App ist in der Regel ohne Angabe personenbezogener 
          Daten möglich. Soweit in unserer App personenbezogene Daten (beispielsweise Name, 
          Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, 
          stets auf freiwilliger Basis.
        </p>

        <h2>Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen 
          Dateien in der App gehören ausschliesslich uns oder den speziell genannten 
          Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
          Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>

        <h2>Quelle</h2>
        <p>
          Dieses Impressum wurde erstellt am {new Date().toLocaleDateString('de-CH')}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Impressum; 