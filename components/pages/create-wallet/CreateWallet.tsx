import Image from 'next/image';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle,
  IonRow,
  IonGrid,
  IonCol,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
  IonCheckbox,
  IonToast,
} from '@ionic/react';

import {faker} from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { arrowBackCircleOutline, warning } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Zoom } from 'swiper/modules';
import SwiperRef from 'swiper';

import './style.css';
import 'swiper/css';
import 'swiper/css/keyboard';

import logo from '../../../public/logo.svg';
import Cosmos from '../../../public/img/chain/cosmos.png';

const CreateWallet = () => {

  const phrases = Array.from({length: 12}, (_, i) => faker.lorem.word({length: {min:4, max:6}, strategy: "fail"}));
  const [enabled, setEnabled] = useState<boolean>(false);
  const [blured, setBlured] = useState<boolean>(true);
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [heading, setHeading] = useState<{title?: string; description?: string}>({title: "New Recovery Phrase"});

  useEffect(() => {
    setTimeout(() => {
      setEnabled(true);
    }, 3000);
  })

  const Back = () => {
    if(activeIndex) {
      if(swiper) swiper.slideTo(activeIndex - 1);
    } else {
      history.back();
    }
  }

  const Next = () => {
    if(blured) {
      setBlured(false);
      return;
    }
    else {
      if(swiper) swiper.slideTo(activeIndex + 1);
    }
  }

  const Finish = () => {
    history.pushState(undefined, '', '/feed');
  }

  const onSlideChange = (s : SwiperRef) => {
    switch(s.activeIndex) {
      case 0: {
        setHeading({title: "New Recovery Phrase"});
        break;
      }
      case 1: {
        setHeading({title: "Verify Recovery Phrase", description: 'Fill out the words according to their numbers to verify that you have stored your phrase safely.'})
        break;
      }
      case 2: {
        setHeading({title: "Select Chains", description: "Don’t worry, you can change your selections anytime in the Manage Chain Visibility in the sidebar menu."})
        break;
      }
    }
    setActiveIndex(s.activeIndex);
  }

  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <div
          style={{ backgroundImage: 'url("./background.svg")' }}
          className="w-full max-w-[900px] mx-auto h-screen bg-contain bg-bottom bg-no-repeat flex flex-col justify-start items-center gap-10 py-10"
        >
          <div className='w-full flex flex-col items-center max-w-[80%] md:max-w-[500px] gap-4 relative'>
          <IonIcon icon={arrowBackCircleOutline} size='large' className='absolute top-0 -left-2 cursor-pointer hover:text-[#f73636] transition-all transition-duration-500' onClick={Back}></IonIcon>
            <Image src={logo} alt="Logo" />
            <IonCard className='w-full gap-3'>
              <IonCardHeader className='mt-5 !mb-2'>
                <div className='relative w-full'>
                  
                  <div className="flex flex-col justify-center max-h-[50px] items-center relative">
                    <IonCardSubtitle>Step {activeIndex + 1}/3</IonCardSubtitle>
                    <IonCardTitle>
                      <div className="text-center py-2 !text-2xl">
                        {heading.title}
                      </div>
                    </IonCardTitle>
                    <span className='max-w-[75%] text-center'>{heading.description}</span>
                  </div>
                </div>
              </IonCardHeader>
              <IonCardContent>
                <Swiper
                  modules={[Keyboard, Zoom]}
                  keyboard
                  zoom
                  noSwiping={true}
                  allowTouchMove={false}
                  onSwiper={(s) => {setSwiper(s)} }
                  onSlideChange={onSlideChange}
                >
                  <SwiperSlide>
                    <div className={'w-full flex flex-col items-stretch gap-10'.concat(activeIndex == 0 ? "" : " absolute")}>
                      <div className='w-full flex flex-col items-stretch gap-2'>
                        <IonGrid className={blured ? 'blur-sm' : ""}>
                          {Array.from({length: 4}).map((_, i) => (
                            <IonRow key={i} className='gap-1'>
                              {
                                Array.from({length: 3}).map((_, j) => (
                                  <IonCol key={j}>
                                    <div className='flex items-center justify-end gap-1'>
                                      <IonInput disabled={blured} value={phrases[i * 3 + j]} fill='outline' label={`Word ${i * 3 + j + 1}`} labelPlacement='stacked' aria-label={(i* 3 + j + 1).toString()}/>
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
                      <IonButton disabled={!enabled} onClick={Next}>
                        {blured ? "I understood. Show my phrase." : "Next"}
                      </IonButton>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className = "flex flex-col items-stretch gap-6 py-10 h-full">
                      <IonGrid>
                        <IonRow className='gap-6'>
                          {
                            Array.from({length: 2}, (_, i) => (
                              <IonCol>
                                
                                  <IonInput fill='outline' label={`Word #${Math.ceil(Math.random() * 11) + 1}`} labelPlacement="stacked"/>
                                
                              </IonCol>
                            ))
                          }
                        </IonRow>
                      </IonGrid>
                      <div className='mx-[15px]'>
                      <IonInput fill='outline' label='Wallet Name'  labelPlacement="floating"  placeholder='e.g. Trading, NFT Vault, Investment'></IonInput>
                      </div>
                      <IonButton onClick={Next} className='mx-[15px]'>
                        {blured ? "I understood. Show my phrase." : "Next"}
                      </IonButton>
                      
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  
                    <div className='flex flex-col items-stretch py-10 px-[15px] gap-5'>
                      <IonInput type='text' label='Search' labelPlacement='stacked' placeholder='Search networks' fill='outline'/>
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
                      <IonButton onClick={Finish} id='submit'>
                          Finish
                      </IonButton>
                    </div>
                  </SwiperSlide>
                </Swiper>
                
                <IonToast trigger='submit' message={"Account was created successfully!"} duration={5000}> </IonToast>  
                  
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateWallet;
