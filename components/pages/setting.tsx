import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/react';
import Store from '../../store';
import { selectNotifications } from '../../store/selectors';

import { close } from 'ionicons/icons';

const Notifications = ({
  open,
  onDidDismiss,
}: {
  open: boolean;
  onDidDismiss: () => void;
}) => {
  return (
    <IonModal isOpen={open} onDidDismiss={onDidDismiss} className="top">
      <IonHeader>
        <IonToolbar>
          <IonText className="text-[20px]">Wallet Settings</IonText>
          <IonButton
            size="small"
            slot="end"
            fill="clear"
            color="dark"
            onClick={onDidDismiss}
          >
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonModal>
  );
};

export default Notifications;
