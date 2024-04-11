import { IonPage, IonContent, IonCard, IonButton, IonText } from '@ionic/react';
import Header from './header';

const Feed = () => {
  const value = 100;
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding" fullscreen>
        <div className="flex flex-col items-center justify-center h-full backdrop-blur-sm">
          <IonCard className="flex w-full flex-col items-center justify-center p-4 gap-2 rounded-xl">
            <div className="flex w-full justify-center items-center gap-2">
              <IonText color="primary">
                <h3>{value}</h3>
              </IonText>
              <IonText>
                <h5>SUI</h5>
              </IonText>
            </div>
            <IonButton className="relative w-full rounded-md normal-case font-bold">
              Buy
            </IonButton>
            <div className="w-full flex gap-2 justify-between items-center">
              <IonButton className="relative w-[50%] rounded-md normal-case font-bold">
                Send
              </IonButton>
              <IonButton className="relative w-[50%] rounded-md normal-case font-bold">
                Copy Address
              </IonButton>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
