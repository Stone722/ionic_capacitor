import { Redirect, Route } from 'react-router-dom';
import {
  IonLabel,
  IonRippleEffect,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import Home from './home';
import Apps from './apps';
import Activity from './activity';
import Settings from './settings';
import { ActivityIcon, AppsIcon, HomeIcon } from '../icon';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/apps" render={() => <Apps />} exact={true} />
        <Route path="/activity" render={() => <Activity />} exact={true} />
        <Route path="/settings" render={() => <Settings />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="h-[70px]">
        <IonTabButton tab="tab1" href="/home">
          <HomeIcon />
          <IonLabel className="font-bold mt-1">Home</IonLabel>
          <IonRippleEffect className="opacity-50" />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/apps">
          <AppsIcon />
          <IonLabel className="font-bold mt-1">Apps</IonLabel>
          <IonRippleEffect className="opacity-50" />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/activity">
          <ActivityIcon />
          <IonLabel className="font-bold mt-1">Activity</IonLabel>
          <IonRippleEffect className="opacity-50" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
