import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonText,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonNavLink,
  IonNav,
} from '@ionic/react';
import {
  settingsSharp,
  lockClosedOutline,
  ellipsisHorizontalSharp,
  globeOutline,
  clipboardOutline,
} from 'ionicons/icons';
import Network from './network';

const Settings = ({ open }: { open: boolean }) => {
  return (
    <IonModal isOpen={open} className="mt-11">
      <IonHeader>
        <IonToolbar className="px-5">
          <IonIcon slot="start" icon={settingsSharp} className="mr-2" />
          <IonText className="text-[20px]">Wallet Settings</IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem>
            <IonIcon icon={globeOutline} className="mr-2" />
            <IonText>Network</IonText>
            <IonText slot="end">{'Mainnet'}&nbsp;&gt;</IonText>
          </IonItem>
          <IonItem>
            <IonIcon icon={lockClosedOutline} className="mr-2" />
            <IonText>Auto-lock Accounts</IonText>
            <IonText slot="end">{'Not Set Up'}&nbsp;&gt;</IonText>
          </IonItem>
          <IonItem>
            <IonIcon icon={clipboardOutline} className="mr-2" />
            <IonText>FAQ</IonText>
          </IonItem>
          <IonItem>
            <IonIcon icon={ellipsisHorizontalSharp} className="mr-2" />
            <IonText>More Options</IonText>
            <IonText slot="end">&nbsp;&gt;</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default Settings;
