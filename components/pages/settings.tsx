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
              <div className="flex justify-end capitalize opacity-50">
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
              <div className="flex justify-end capitalize opacity-50">
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

const NetworkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    fill="none"
    viewBox="0 0 24 24"
    className="opacity-50 mr-2"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 19.25a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5Z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15.25 12c0 4.5-2.007 7.25-3.25 7.25-1.243 0-3.25-2.75-3.25-7.25S10.757 4.75 12 4.75c1.243 0 3.25 2.75 3.25 7.25ZM5 12h14"
    ></path>
  </svg>
);

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    fill="none"
    viewBox="0 0 24 24"
    className="opacity-50 mr-2"
  >
    <path
      fill="currentColor"
      d="M7.563 20.048c-1.292 0-1.977-.703-1.977-2.092V11.9c0-1.221.536-1.907 1.538-2.056V7.717c0-3.305 2.162-4.904 4.456-4.904 2.303 0 4.465 1.6 4.465 4.904v2.127c1.01.15 1.538.844 1.538 2.056v6.056c0 1.389-.685 2.092-1.977 2.092H7.563Zm.958-12.516v2.285h6.135V7.532c0-2.223-1.432-3.392-3.076-3.392-1.643 0-3.059 1.169-3.059 3.392Zm-.914 11.189h7.955c.386 0 .597-.238.597-.668v-6.25c0-.43-.21-.659-.597-.659H7.607c-.378 0-.597.229-.597.66v6.249c0 .43.22.668.597.668Z"
    ></path>
  </svg>
);

const FAQIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    fill="none"
    viewBox="0 0 24 24"
    className="opacity-50 mr-2"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.655 6C5.741 6 5 6.865 5 7.931v9.138C5 18.135 5.741 19 6.655 19h8.69c.914 0 1.655-.865 1.655-1.931V7.931C17 6.865 16.259 6 15.345 6"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7 5.625C7 5.004 7.672 4.5 8.5 4.5h5c.828 0 1.5.504 1.5 1.125v.75c0 .621-.672 1.125-1.5 1.125h-5C7.672 7.5 7 6.996 7 6.375v-.75Z"
    ></path>
  </svg>
);

const DotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.7em"
    height="1.7em"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="opacity-50 mr-2"
  >
    <path d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
  </svg>
);
