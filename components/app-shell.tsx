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
    } catch {}
  });

const AppShell = () => {
  const isAuthed = useState<boolean>(false);

  return (
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
  );
};

export default AppShell;
