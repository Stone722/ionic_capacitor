import { IonPage, IonContent } from '@ionic/react';
import Header from './header';

const Activity = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Activity;
