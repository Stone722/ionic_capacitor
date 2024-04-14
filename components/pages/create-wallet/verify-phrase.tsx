import { IonButton, IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import React from 'react';

interface IProps {
  verifyingWords: { index: number; word: string }[];
  handleNext: () => void;
}

function VerifyPhrase(props: IProps) {
  return (
    <div className="flex flex-col items-stretch gap-4 h-full">
      <IonGrid>
        <IonRow className="gap-6">
          {props.verifyingWords.map((item, i) => (
            <IonCol key={i}>
              <IonInput
                fill="outline"
                label={`Word #${item.index}`}
                labelPlacement="stacked"
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
      <div>
        <IonInput
          fill="outline"
          label="Wallet Name"
          labelPlacement="floating"
          placeholder="e.g. Trading, NFT Vault, Investment"
        ></IonInput>
      </div>
      <div>
        <IonInput
          fill="outline"
          label="Create CLORE password"
          labelPlacement="floating"
          placeholder="***"
        ></IonInput>
      </div>
      <div>
        <IonInput
          fill="outline"
          label="Confirm CLORE password"
          labelPlacement="floating"
          placeholder="***"
        ></IonInput>
      </div>
      <IonButton onClick={props.handleNext}>Next</IonButton>
    </div>
  );
}

export default VerifyPhrase;
