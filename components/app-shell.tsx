'use client';
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Main from './pages/main';
import { useState } from 'react';
import AuthRouter from './router/auth-router';

setupIonicReact({});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', async status => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch { }
  });

const AppShell = () => {
  const isAuthed = useState<boolean>(false);

  return (
    <div className="w-screen h-screen relative flex items-center justify-center bg-white">
      <div className="w-full h-full max-w-[350px] max-h-[650px] relative rounded-xl overflow-hidden">
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet id="main">
              <Route
                path="/"
                render={() => {
                  return <AuthRouter />
                  // return <Main />;
                }}
              />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </div>
    </div>
  );
};

export default AppShell;
