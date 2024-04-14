import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonNavLink,
  IonRippleEffect,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { chevronBackOutline } from 'ionicons/icons';
import ImportWallet from './import-wallet';
import CreateWallet from '../create-wallet';

const CreateMethod = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={chevronBackOutline} text={''} />
          </IonButtons>
          <IonTitle className="IonTitlex-0 text-[20px]">
            Create New Wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="h-full flex flex-col justify-center items-center">
          <IonCard className="p-2 rounded-lg">
            <IonCardHeader>
              <IonCardTitle className="text-lg">
                Use Recovery Phrase
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="flex flex-col gap-5">
              <p>Maximum control & high compatibility across all wallets</p>
              <IonNavLink
                routerDirection="forward"
                component={() => <CreateWallet />}
                className="w-full"
              >
                <div className="ion-activatable btn text-white font-bold bg-[#f73636] h-12">
                  Create a new recovery phrase
                  <IonRippleEffect className="opacity-50" />
                </div>
              </IonNavLink>
              <IonNavLink
                routerDirection="forward"
                component={() => <ImportWallet />}
                className="w-full"
              >
                <div className="ion-activatable btn text-white font-bold border h-12">
                  Import existing recovery phrase
                  <IonRippleEffect className="opacity-50" />
                </div>
              </IonNavLink>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </>
  );
};

export default CreateMethod;
