import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from '@ionic/react';
import Settings from './setting';
import logo from '../../public/logo.svg';
import { settingsOutline } from 'ionicons/icons';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <>
      <IonHeader>
        <IonToolbar class="px-2">
          <Link to={'/home'} slot="start">
            <Image src={logo} alt="logo" width={80} />
          </Link>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowSettings(true)}>
              <IonIcon icon={settingsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <Settings
          open={showSettings}
          onDidDismiss={() => setShowSettings(false)}
        />
      </IonHeader>
    </>
  );
};
export default Header;
