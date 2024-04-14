import { IonButton, IonChip, IonIcon, IonRippleEffect } from '@ionic/react';
import React from 'react';
import { warning } from 'ionicons/icons';

interface IProps {
  activeIndex: number;
  mnemonic: string[];
  enabled: boolean;
  handleNext: () => void;
}
function RecoveryPhrase(props: IProps) {
  return (
    <div className="w-full flex flex-col items-stretch gap-5">
      <div>
        {Array.from({ length: 12 }).map((_, j) => (
          <IonChip key={j}>
            {j + 1}.&nbsp;{props.mnemonic[j]}
          </IonChip>
        ))}
      </div>
      <div className="ion-activatable btn border text-[#f73636] border-[#f73636]">
        Copy to clipboard
        <IonRippleEffect className="opacity-50" />
      </div>
      <div className="text-gray-100 flex flex-col gap-1">
        <span className="text-[#f73636] text-sm md:text-base font-bold flex items-start">
          <IonIcon
            icon={warning}
            className="mr-1 text-lg pt-[2px] min-w-7"
          ></IonIcon>
          <span className="flex-shrink">
            DO NOT share your recovery phrase with ANYONE.
          </span>
        </span>
        <span className="ml-2">
          Anyone with your recovery phrase can have full control over your
          assets. Please stay vigilant against phishing attacks at all times.
        </span>
      </div>
      <div className="text-gray-100 flex flex-col gap-1">
        <span className="text-[#f73636] text-sm md:text-base font-bold flex items-start">
          <IonIcon
            icon={warning}
            className="mr-1 text-lg pt-[2px] min-w-7"
          ></IonIcon>
          <span className="flex-shrink">Back up the phrase safely.</span>
        </span>
        <span className="ml-2">
          You will never be able to restore your account without your recovery
          phrase.
        </span>
      </div>
      <IonButton onClick={props.handleNext}>Next</IonButton>
    </div>
  );
}

export default RecoveryPhrase;
