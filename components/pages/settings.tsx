import {
  IonContent,
  IonItem,
  IonPage,
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
  IonRippleEffect,
  IonCheckbox,
  IonTextarea,
} from '@ionic/react';
import Header from './header';
import { useState } from 'react';
import { DotIcon, FAQIcon, LockIcon, NetworkIcon } from '../icon';

const Settings = () => {
  const [network, setNetwork] = useState<string>('mainnet');
  const [lock, setLock] = useState<number>(0);
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonAccordionGroup expand="inset">
          <IonAccordion value="first">
            <IonItem slot="header" className="text-[15px]">
              <NetworkIcon />
              <IonLabel>Network</IonLabel>
              <div className="flex justify-end capitalize opacity-50 mr-2">
                {network}
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              <label className="flex p-2 cursor-pointer justify-between">
                <div className="title px-2">Mainnet</div>
                <input
                  className="transform scale-125"
                  type="radio"
                  name="radio"
                  value="mainnet"
                  defaultChecked={network === 'mainnet'}
                  onChange={e => {
                    setNetwork(e.target.value);
                  }}
                />
              </label>
              <label className="flex p-2 cursor-pointer justify-between">
                <div className="title px-2">Testnet</div>
                <input
                  className="transform scale-125"
                  type="radio"
                  name="radio"
                  value="testnet"
                  defaultChecked={network === 'testnet'}
                  onChange={e => setNetwork(e.target.value)}
                />
              </label>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" className="text-[15px]">
              <LockIcon />
              <IonLabel>Auto-lock</IonLabel>
              <div className="flex justify-end capitalize opacity-50  mr-2">
                {lock === 0 ? 'Not set up' : `${lock} hour`}
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              <IonCheckbox labelPlacement="end">
                Auto-lock after I am inactive for
              </IonCheckbox>
              <div>
                <IonTextarea maxlength={10} rows={1}></IonTextarea>
              </div>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" className="text-[15px]">
              <FAQIcon />
              <IonLabel>FAQ</IonLabel>
            </IonItem>
            <div></div>
          </IonAccordion>
          <IonAccordion value="four">
            <IonItem slot="header" className="text-[15px]">
              <DotIcon />
              <IonLabel>More Options</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <div className="ion-activatable btn text-white font-bold bg-[#ff5555] border">
                Log out
                <IonRippleEffect className="opacity-50" />
              </div>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
