import { IonButton, IonCheckbox, IonInput } from '@ionic/react';
import React from 'react';
import Image from 'next/image';
import Cosmos from '../../../public/img/chain/cosmos.png';

function SelectChain() {
  const handleFinish = () => {
    history.pushState(undefined, '', '/home');
  };

  return (
    <div className="flex flex-col gap-3 py-1">
      <IonInput
        type="text"
        label="Search"
        labelPlacement="stacked"
        placeholder="Search networks"
        fill="outline"
      />
      <span className="text-center">1 chain(s) selected</span>
      <div className="border border-[#949494] border-opacity-75 rounded">
        <div className="border-b border-[#949494] border-opacity-75 p-2 flex items-center">
          <IonCheckbox className="w-full">
            <span className="rounded-full w-full flex items-center gap-3">
              <Image src={Cosmos} alt="cosmos" className="w-8" />
              <span>Cosmos Hub</span>
            </span>
          </IonCheckbox>
        </div>
      </div>
      <IonButton onClick={handleFinish} id="submit">
        Finish
      </IonButton>
    </div>
  );
}

export default SelectChain;
