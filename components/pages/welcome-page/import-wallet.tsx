import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonRippleEffect,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import logoTitle from '../../../public/logo-title.svg';

import { chevronBackOutline } from 'ionicons/icons';
import Image from 'next/image';

const ImportWallet = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={chevronBackOutline} text={''} />
          </IonButtons>
          <div className="flex gap-0 justify-center">
            <p className="px-0 mr-2 text-[20px]" slot="start">
              Welcome Back to
            </p>
            <Image
              src={logoTitle}
              alt="logotitle"
              priority={true}
              width={90}
              slot="end"
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="h-full flex flex-col justify-center items-center">
          <IonCard className="p-2 rounded-lg">
            <IonCardHeader>
              <IonCardTitle className="text-lg">
                Recovery Phrase or Private Key
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="flex flex-col gap-5">
              <p>
                Use an existing 12 word recovery phrase or private key. You can
                also import wallets from other wallet providers.
              </p>
              <div className="ion-activatable btn text-white font-bold bg-[#f73636] h-12">
                Use recovery phrase or private key
                <IonRippleEffect className="opacity-50" />
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </>
  );
};

export default ImportWallet;
