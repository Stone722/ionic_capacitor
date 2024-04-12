import { IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import { settingsOutline, close } from 'ionicons/icons';
import { useState } from 'react';
import Settings from './settings';
import logo from '../../public/logo1.svg';
import logoTitle from '../../public/logo-title.svg';

const Header = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <IonHeader>
      <IonToolbar class="px-2">
        <Image
          priority={true}
          src={logo}
          alt="logo"
          slot="start"
          className="rotate mr-2 w-[30px] h-[30px]"
        />
        <Image
          priority={true}
          src={logoTitle}
          alt="logo-title"
          className="w-[100px] h-[16.27px]"
        />

        <div
          onClick={() => setShowSettings(!showSettings)}
          slot="end"
          className="h-full flex justify-center items-center cursor-pointer"
        >
          <IonIcon
            icon={showSettings ? close : settingsOutline}
            className="relative"
            color="primary"
          ></IonIcon>
        </div>
      </IonToolbar>
      <Settings open={showSettings} />
    </IonHeader>
  );
};
export default Header;
