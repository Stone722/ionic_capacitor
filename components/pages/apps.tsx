import { IonPage, IonContent } from '@ionic/react';
import Header from './header';

const Apps = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Apps;
