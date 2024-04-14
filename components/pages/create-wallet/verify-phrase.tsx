import { IonButton, IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';
import React, { useMemo } from 'react';
import { keyRingStore } from '../../store/key-ring';
import { Toast } from '@capacitor/toast';

interface IProps {
  handleNext: () => void;
  mnemonic:string[];
}

function VerifyPhrase(props: IProps) {

    const verifyingWords = useMemo(() => {
        const one = Math.floor(Math.random() * 12);
        const two = (() => {
            let r = Math.floor(Math.random() * 12);
            while (r === one) {
                r = Math.floor(Math.random() * 12);
            }
            return r;
        })()

        return [
            { index: one + 1, word: props.mnemonic[one] },
            { index: two + 1, word: props.mnemonic[two] },
        ].sort((word1, word2) => {
            return word1.index < word2.index ? -1 : 1;
        });
    }, [props.mnemonic])

    const handleNewMnemonicKey = async () => {
        const vaultId = await keyRingStore.createMnemonicKeyRing(
            props.mnemonic.join(" "), {
            account: 0,
            change: 0,
            addressIndex: 0
        }, "nft", "fortitude211"
        )

        await Toast.show({
            text:`Create Mnemonic key ring ${vaultId}`
        })
        // const vaultData = keyRingStore.needKeyCoinTypeFinalize("79b9d3fd9d971a81", "160")
        // console.log(vaultData)
    }

  return (
    <div className="flex flex-col items-stretch gap-4 h-full">
      <IonGrid>
        <IonRow className="gap-6">
          {verifyingWords.map((item, i) => (
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
      <IonButton onClick={handleNewMnemonicKey}>Next</IonButton>
    </div>
  );
}

export default VerifyPhrase;
