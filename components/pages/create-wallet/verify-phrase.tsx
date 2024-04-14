import { IonButton, IonCol, IonGrid, IonInput, IonRow } from '@ionic/react'
import React, { useEffect, useMemo } from 'react'
import { keyRingStore } from '../../store/key-ring';


interface IProps {
    mnemonic: string[]
    handleNext: () => void;
    blured: boolean;
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
        // const vaultId = await keyRingStore.createMnemonicKeyRing(
        //     props.mnemonic.join(" "), {
        //     account: 0,
        //     change: 0,
        //     addressIndex: 0
        // }, "nft", "fortitude211"
        // )
        const vaultData = keyRingStore.needKeyCoinTypeFinalize("79b9d3fd9d971a81", "160")
        console.log(vaultData)
    }


    return (
        <div className="flex flex-col items-stretch gap-6 py-10 h-full">
            <IonGrid>
                <IonRow className='gap-6'>
                    {
                        verifyingWords.map((item, i) => (
                            <IonCol key={i}>
                                <IonInput fill='outline' label={`Word #${item.index}`} labelPlacement="stacked" />
                            </IonCol>
                        ))
                    }
                </IonRow>
            </IonGrid>
            <div className='mx-[10px]'>
                <IonInput fill='outline' label='Wallet Name' labelPlacement="floating" placeholder='e.g. Trading, NFT Vault, Investment'></IonInput>
            </div>
            <div className='mx-[10px]'>
                <IonInput fill='outline' label='Create CLORE password' labelPlacement="floating" placeholder='***'></IonInput>
            </div>
            <div className='mx-[10px]'>
                <IonInput fill='outline' label='Confirm CLORE password' labelPlacement="floating" placeholder='***'></IonInput>
            </div>

            <IonButton onClick={handleNewMnemonicKey} className='mx-[10px]'>
                {props.blured ? "I understood. Show my phrase." : "handleNext"}
            </IonButton>

        </div>
    )
}

export default VerifyPhrase
