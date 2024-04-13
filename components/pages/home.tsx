import {
  IonPage,
  IonContent,
  IonCard,
  IonText,
  IonRippleEffect,
} from '@ionic/react';
import Header from './header';

const Feed = () => {
  const value = 100;
  return (
    <IonPage>
      <Header />
      <IonContent className="ion-padding" fullscreen>
        <div className="flex flex-col items-center justify-center h-full backdrop-blur-sm">
          <IonCard className="flex w-full flex-col items-center justify-center p-4 gap-2 rounded-xl">
            <div className="flex w-full justify-center items-center">
              <IonText>
                <h3 className="text-white">{value}</h3>
              </IonText>
            </div>
            <div className="ion-activatable btn text-white font-bold bg-[#f73636]">
              Buy
              <IonRippleEffect className="opacity-50" />
            </div>
            <div className="flex w-full justify-between text-white">
              <div className="ion-activatable btn">
                Send
                <IonRippleEffect className="text-[#f736361e]" />
              </div>
              <div className="ion-activatable btn">
                Copy Address
                <IonRippleEffect className="text-[#f736361e]" />
              </div>
            </div>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
