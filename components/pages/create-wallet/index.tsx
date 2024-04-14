import Image from 'next/image';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonCardSubtitle,
  IonToast,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Zoom } from 'swiper/modules';
import SwiperRef from 'swiper';
import logo from '../../../public/logo.svg';
import { Mnemonic } from '../../../packages/crypto';
import RecoveryPhrase from './recovery-phrase';
import VerifyPhrase from './verify-phrase';
import SelectChain from './select-chain';
import './style.css';
import 'swiper/css';
import 'swiper/css/keyboard';

const CreateWallet = () => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [blured, setBlured] = useState<boolean>(true);
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [heading, setHeading] = useState<{ title?: string; description?: string }>({ title: "New Recovery Phrase" });

  const handleBack = () => {
    if (activeIndex) {
      if (swiper) swiper.slideTo(activeIndex - 1);
    } else {
      history.back();
    }
  }

  const handleNext = () => {
    if (blured) {
      setBlured(false);
      return;
    }
    else {
      if (swiper) swiper.slideTo(activeIndex + 1);
    }
  }


  const onSlideChange = (s: SwiperRef) => {
    switch (s.activeIndex) {
      case 0: {
        setHeading({ title: "New Recovery Phrase" });
        break;
      }
      case 1: {
        setHeading({ title: "Verify Recovery Phrase", description: 'Fill out the words according to their numbers to verify that you have stored your phrase safely.' })
        break;
      }
      case 2: {
        setHeading({ title: "Select Chains", description: "Don’t worry, you can change your selections anytime in the Manage Chain Visibility in the sidebar menu." })
        break;
      }
    }
    setActiveIndex(s.activeIndex);
  }

  useEffect(() => {
    setTimeout(() => {
      setEnabled(true);
    }, 3000);
  }, [])


  useEffect(() => {
    const rng = (array: any) => {
      return Promise.resolve(crypto.getRandomValues(array));
    };
    Mnemonic.generateSeed(rng, 128).then((str: string) => {
      setMnemonic(str.split(" "))
    });
  }, [enabled])

  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <div
          style={{ backgroundImage: 'url("./background.svg")' }}
          className="w-full max-w-[900px] mx-auto h-screen bg-contain bg-bottom bg-no-repeat flex flex-col justify-start items-center gap-10 py-10"
        >
          <div className='w-full flex flex-col items-center max-w-[80%] md:max-w-[500px] gap-4 relative'>
            <IonIcon icon={arrowBackCircleOutline} size='large' className='absolute top-0 -left-2 cursor-pointer hover:text-[#f73636] transition-all transition-duration-500' onClick={handleBack}></IonIcon>
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
                  onSwiper={(s) => { setSwiper(s) }}
                  onSlideChange={onSlideChange}
                >
                  <SwiperSlide>
                    <RecoveryPhrase activeIndex={activeIndex} blured={blured} mnemonic={mnemonic} enabled={enabled} handleNext={handleNext} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <VerifyPhrase mnemonic={mnemonic} handleNext={handleNext} blured={blured} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SelectChain />
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
