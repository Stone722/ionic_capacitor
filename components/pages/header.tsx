import {
  IonHeader,
  IonRippleEffect,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import Image from 'next/image';
import logo from '../../public/logo1.svg';
import logoTitle from '../../public/logo-title.svg';
import { SettingsIcon, CloseIcon } from '../icon';

const Header = () => {
  const router = useIonRouter();

  const handleRouter = () => {
    if (router.routeInfo.pathname === '/settings') {
      router.goBack();
    } else {
      router.push('/settings');
    }
  };

  const handleLogo = () => {
    router.push('/home');
  };
  return (
    <IonHeader>
      <IonToolbar className="px-2">
        <div
          className="flex items-center justify-start px-3 cursor-pointer"
          slot="start"
          onClick={handleLogo}
        >
          <Image
            priority={true}
            src={logo}
            alt="logo"
            className="rotate mr-2 w-[30px] h-[30px]"
          />
          <Image
            priority={true}
            src={logoTitle}
            alt="logo-title"
            className="w-[100px] h-[16.27px]"
          />
        </div>
        <div
          onClick={handleRouter}
          slot="end"
          className="flex justify-center items-center cursor-pointer w-10 h-10 ion-activatable relative text-[#ff5555]"
        >
          {router.routeInfo.pathname === '/settings' ? (
            <CloseIcon />
          ) : (
            <SettingsIcon />
          )}
          <IonRippleEffect className="opacity-50" />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
