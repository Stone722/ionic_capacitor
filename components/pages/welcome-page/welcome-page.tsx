import Image from 'next/image';
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonCardTitle,
  IonicSlides,
  IonTitle,
  IonIcon,
  IonRouterLink,
} from '@ionic/react';
import { useState } from 'react';
import { arrowBackCircleOutline, downloadOutline, key } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Zoom } from 'swiper/modules';
import SwiperRef from 'swiper';

import './style.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import logo from '../../../public/logo.svg';
import logoTitle from '../../../public/logo-title.svg';

const WelcomePage = () => {
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mode, setMode] = useState<('create' | 'import')[]>([]);
  const [importSlideIndex, setImportSlideIndex] = useState<number>(-1);

  const createWallet = () => {
    setMode(mode => [...mode, 'create']);
    if (swiper) swiper.slideTo(activeIndex + 1);
  };

  const importWallet = () => {
    setMode(mode => [...mode, 'import']);
    setImportSlideIndex(activeIndex + 1);
    if (swiper) swiper.slideTo(activeIndex + 1);
  };

  const slideBack = () => {
    if (swiper) swiper.slideTo(activeIndex - 1);
    setMode(mode => mode.slice(0, mode.length - 1));
  };

  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <div
          style={{ backgroundImage: 'url("./background.svg")' }}
          className="w-full h-full mx-auto bg-contain bg-bottom bg-no-repeat flex flex-col justify-center items-center gap-10"
        >
          <IonCard className="max-w-[90%] md:max-w-[500px] w-full transition-all">
            <IonCardHeader>
              <div className="flex flex-col justify-center max-h-[50px] items-center">
                <Image src={logo} alt="Logo" />
                <IonCardTitle>
                  <div className="text-center py-4 !text-2xl flex gap-2">
                    Welcome to
                    <Image src={logoTitle} alt="Logo" />
                  </div>
                </IonCardTitle>
              </div>
            </IonCardHeader>
            <IonCardContent>
              <Swiper
                modules={[Keyboard, Zoom]}
                keyboard
                zoom
                noSwiping={true}
                allowTouchMove={false}
                onSwiper={s => {
                  setSwiper(s);
                }}
                onSlideChange={s => {
                  setActiveIndex(s.activeIndex);
                }}
              >
                <SwiperSlide className="h-full">
                  <div className="flex flex-col justify-end gap-2 md:px-6 h-full">
                    <IonButton onClick={createWallet}>
                      Create a new wallet
                    </IonButton>
                    <IonButton onClick={importWallet}>
                      Import an existing wallet
                    </IonButton>
                  </div>
                </SwiperSlide>
                {mode.includes('create') && (
                  <SwiperSlide>
                    <div
                      className={`flex flex-col justify-center gap-4 md:px-3 ${activeIndex === 1 ? 'relative' : 'absolute'}`}
                    >
                      <div className="absolute top-0 z-20">
                        <IonIcon
                          icon={arrowBackCircleOutline}
                          size="large"
                          className="cursor-pointer text-white hover:text-[#f73636] transition-all transition-duration-500"
                          onClick={slideBack}
                        ></IonIcon>
                      </div>
                      <IonTitle>
                        <div className="text-center font-bold text-white">
                          Use Recovery Phrase
                        </div>
                      </IonTitle>
                      <div className="text-white text-lg text-center">
                        Maximum control & high compatibility across all wallets
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <IonRouterLink href="/create">
                          <IonButton className="w-full">
                            Create new recovery phrase
                          </IonButton>
                        </IonRouterLink>
                        <IonButton
                          className="outline-fill"
                          onClick={importWallet}
                        >
                          Import existing recovery phrase
                        </IonButton>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
                <SwiperSlide>
                  <div
                    className={`flex flex-col justify-center gap-4 md:px-3 ${activeIndex === importSlideIndex ? 'relative' : 'absolute'}`}
                  >
                    <div className="absolute top-0 z-20">
                      <IonIcon
                        icon={arrowBackCircleOutline}
                        size="large"
                        className="cursor-pointer hover:text-[#f73636] transition-all transition-duration-500"
                        onClick={slideBack}
                      ></IonIcon>
                    </div>
                    <IonTitle>
                      <div className="text-center font-bold text-white w-full">
                        Glad you're back!
                      </div>
                    </IonTitle>
                    <div className="text-white text-lg text-center">
                      Use an existing 12 word recovery phrase or private key.
                      You can also import wallets from other wallet providers.
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <IonButton className="capitalize">
                        <IonIcon
                          icon={downloadOutline}
                          className="text-lg mr-1"
                        ></IonIcon>{' '}
                        Use recovery key or private key
                      </IonButton>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
