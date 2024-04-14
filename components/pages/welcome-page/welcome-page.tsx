import Image from 'next/image';
import { IonContent, IonNavLink, IonRippleEffect } from '@ionic/react';

import logo1 from '../../../public/logo1.svg';
import logoTitle from '../../../public/logo-title.svg';
import CreateMethod from './create-method';
import ImportWallet from './import-wallet';

const WelcomePage = () => {
  return (
    <>
      <IonContent fullscreen class="ion-padding">
        <div className="w-full h-full flex flex-col justify-center items-center ion-padding gap-5">
          <div className="flex justify-center items-center gap-5 mb-[190px]">
            <Image src={logo1} alt="logo" priority={true} width={70} />
            <Image
              src={logoTitle}
              alt="logotitle"
              priority={true}
              width={150}
            />
          </div>
          <IonNavLink
            routerDirection="forward"
            component={() => <CreateMethod />}
            className="w-full"
          >
            <div className="ion-activatable btn text-white font-bold bg-[#f73636] h-12">
              Create a new wallet
              <IonRippleEffect className="opacity-50" />
            </div>
          </IonNavLink>
          <IonNavLink
            routerDirection="forward"
            component={() => <ImportWallet />}
            className="w-full"
          >
            <div className="ion-activatable btn text-white font-bold bg-[#444444] h-12">
              Import an existing wallet
              <IonRippleEffect className="opacity-50" />
            </div>
          </IonNavLink>
        </div>
      </IonContent>
    </>
  );
};

export default WelcomePage;
