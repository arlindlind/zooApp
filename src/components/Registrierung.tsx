import React, { useState } from 'react';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton, IonToast,
} from '@ionic/react';
import './Registrierung.css';

const Registrierung: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastSuccessful, setToastSuccessful] = useState(false);

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z]{3,}$/;

        if (!usernameRegex.test(name)) {
            setToastMessage('Der Name muss mindestens 3 Buchstaben enthalten und darf keine Sonderzeichen enthalten.');
            setShowToast(true);
            setToastSuccessful(false);
        } else if (!emailRegex.test(email)) {
            setToastMessage('Bitte gib eine gültige E-Mail-Adresse ein.');
            setShowToast(true);
            setToastSuccessful(false);
        } else {
            setToastMessage('Registrierung erfolgreich.');
            setShowToast(true);
            setToastSuccessful(true);
        }
    };


    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Registrierung</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput
                            value={name}
                            placeholder="Gib deinen Namen ein"
                            onIonChange={(e) => setName(e.detail.value!)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput
                            value={email}
                            type="email"
                            placeholder="Gib deine E-Mail-Adresse ein"
                            onIonChange={(e) => setEmail(e.detail.value!)}
                        />
                    </IonItem>

                    <IonButton expand="block" className="ion-margin-top" onClick={handleSubmit}>
                        Registrieren
                    </IonButton>
                </IonContent>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    position="bottom"
                    color={toastSuccessful ? "success" : "danger"}
                />
            </IonPage>
        </IonApp>
    );
};

export default Registrierung;