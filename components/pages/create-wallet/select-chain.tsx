import { IonButton, IonCheckbox, IonInput } from '@ionic/react'
import React from 'react'
import Image from 'next/image';
import Cosmos from '../../../public/img/chain/cosmos.png';

interface IProps {
}

function SelectChain(props: IProps) {

    const handleFinish = () => {
        history.pushState(undefined, '', '/feed');
    }

    return (
        <div className='flex flex-col items-stretch py-10 px-[15px] gap-5'>
            <IonInput type='text' label='Search' labelPlacement='stacked' placeholder='Search networks' fill='outline' />
            <span className='text-center'>1 chain(s) selected</span>
            <div className='!bg-transparent border border-[#949494] border-opacity-75 rounded max-h-96 overflow-auto'>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className='border-b border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
                <div className=' border-[#949494] border-opacity-75 p-3'>
                    <IonCheckbox className='w-full'>
                        <span className='rounded-full w-full flex items-center gap-3'>
                            <Image src={Cosmos} alt='cosmos' className='w-10' />
                            <span>Cosmos Hub</span>
                        </span>
                    </IonCheckbox>
                </div>
            </div>
            <IonButton onClick={handleFinish} id='submit'>
                Finish
            </IonButton>
        </div>
    )
}

export default SelectChain
