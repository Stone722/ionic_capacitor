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
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from '@ionic/react';
import { useEffect, useMemo, useState } from 'react';
import { arrowBackCircleOutline, chevronBackOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Zoom } from 'swiper/modules';
import SwiperRef from 'swiper';
import { Mnemonic } from '../../../packages/crypto';
import RecoveryPhrase from './recovery-phrase';
import VerifyPhrase from './verify-phrase';
import SelectChain from './select-chain';
import 'swiper/css';
import 'swiper/css/keyboard';

const CreateWallet = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [heading, setHeading] = useState<{
    title?: string;
    description?: string;
  }>({ title: 'New Recovery Phrase' });

  const verifyingWordsList = useMemo(() => {
    const one = Math.floor(Math.random() * 12);
    const two = (() => {
      let r = Math.floor(Math.random() * 12);
      while (r === one) {
        r = Math.floor(Math.random() * 12);
      }
      return r;
    })();

    return [
      { index: one, word: mnemonic[one] },
      { index: two, word: mnemonic[two] },
    ].sort((word1, word2) => {
      return word1.index < word2.index ? -1 : 1;
    });
  }, [mnemonic]);

  const handleBack = () => {
    if (activeIndex) {
      if (swiper) swiper.slideTo(activeIndex - 1);
    } else {
      history.back();
    }
  };

  const handleNext = () => {
    if (swiper) swiper.slideTo(activeIndex + 1);
  };

  const onSlideChange = (s: SwiperRef) => {
    switch (s.activeIndex) {
      case 0: {
        setHeading({ title: 'New Recovery Phrase' });
        break;
      }
      case 1: {
        setHeading({
          title: 'Verify Recovery Phrase',
          description:
            'Fill out the words according to their numbers to verify that you have stored your phrase safely.',
        });
        break;
      }
      case 2: {
        setHeading({
          title: 'Select Chains',
          description:
            'Don’t worry, you can change your selections anytime in the Manage Chain Visibility in the sidebar menu.',
        });
        break;
      }
    }
    setActiveIndex(s.activeIndex);
  };

  useEffect(() => {
    const rng = (array: any) => {
      return Promise.resolve(crypto.getRandomValues(array));
    };
    Mnemonic.generateSeed(rng, 128).then((str: string) => {
      setMnemonic(str.split(' '));
    });
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon={chevronBackOutline} text={''} />
          </IonButtons>
          <IonTitle className="IonTitlex-0 text-[20px]">
            Create New Wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard className="rounded-lg">
          <IonCardHeader>
            <div>
              <IonCardSubtitle className="text-center">
                Step {activeIndex + 1}/3
              </IonCardSubtitle>
              <IonCardTitle className="text-[20px] text-center">
                {heading.title}
              </IonCardTitle>
              <p className="mt-2 text-justify normal-case">
                &nbsp;&nbsp;
                {heading.description}
              </p>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <Swiper
              modules={[Keyboard, Zoom]}
              keyboard
              zoom
              autoHeight={true}
              noSwiping={true}
              allowTouchMove={false}
              onSwiper={s => {
                setSwiper(s);
              }}
              onSlideChange={onSlideChange}
            >
              <SwiperSlide>
                <RecoveryPhrase
                  activeIndex={activeIndex}
                  mnemonic={mnemonic}
                  enabled={enabled}
                  handleNext={handleNext}
                />
              </SwiperSlide>
              <SwiperSlide>
                <VerifyPhrase
                  verifyingWords={verifyingWordsList}
                  handleNext={handleNext}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SelectChain />
              </SwiperSlide>
            </Swiper>

            <IonToast
              trigger="submit"
              message={'Account was created successfully!'}
              duration={3000}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default CreateWallet;
