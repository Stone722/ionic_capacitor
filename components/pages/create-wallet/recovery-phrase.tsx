
import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react'
import React from 'react'
import { warning } from 'ionicons/icons';

interface IProps {
    activeIndex: number;
    blured: boolean;
    mnemonic: string[];
    enabled: boolean;
    handleNext: () => void;
}
function RecoveryPhrase(props: IProps) {
    return (
        <div className={'w-full flex flex-col items-stretch gap-10'.concat(props.activeIndex == 0 ? "" : " absolute")}>
            <div className='w-full flex flex-col items-stretch gap-2'>
                <IonGrid className={props.blured ? 'blur-sm' : ""}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <IonRow key={i} className='gap-1'>
                            {
                                Array.from({ length: 3 }).map((_, j) => (
                                    <IonCol key={j}>
                                        <div className='flex items-center justify-end gap-1'>
                                            <IonInput disabled={props.blured} value={props.mnemonic[i * 3 + j]} fill='outline' label={`Word ${i * 3 + j + 1}`} labelPlacement='stacked' aria-label={(i * 3 + j + 1).toString()} />
                                        </div>
                                    </IonCol>
                                ))
                            }
                        </IonRow>
                    ))}
                </IonGrid>
                <div className='flex flex-col items-center'>
                    <IonButton fill='clear' color='primary' className='clear-btn' size='small'>Copy to clipboard</IonButton>
                </div>
            </div>

            <div className='w-full flex flex-col items-stretch gap-4'>
                <div className='text-gray-100 flex flex-col gap-1'>
                    <span className='text-[#f73636] text-sm md:text-base font-bold flex items-start'>
                        <IonIcon icon={warning} className='mr-1 text-lg pt-[2px] min-w-7'></IonIcon>
                        <span className='flex-shrink'>DO NOT share your recovery phrase with ANYONE.</span>
                    </span>
                    <span className='mx-2'>Anyone with your recovery phrase can have full control over your assets. Please stay vigilant against phishing attacks at all times.</span>
                </div>
                <div className='text-gray-100 flex flex-col gap-1'>
                    <span className='text-[#f73636] text-sm md:text-base font-bold flex items-start'>
                        <IonIcon icon={warning} className='mr-1 text-lg pt-[2px] min-w-7'></IonIcon>
                        <span className='flex-shrink'>Back up the phrase safely.</span>
                    </span>
                    <span className='mx-2'>You will never be able to restore your account without your recovery phrase.</span>
                </div>
            </div>
            <IonButton disabled={!props.enabled} onClick={props.handleNext}>
                {props.blured ? "I understood. Show my phrase." : "Next"}
            </IonButton>
        </div>
    )
}

export default RecoveryPhrase
