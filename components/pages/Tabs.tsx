import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
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
import { statsChartSharp, home, apps } from 'ionicons/icons';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/apps" render={() => <Apps />} exact={true} />
        <Route path="/activity" render={() => <Activity />} exact={true} />
        <Route path="" render={() => <Redirect to="/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="rounded-tr-[15px] rounded-tl-[15px]">
        <IonTabButton tab="tab1" href="/home" className="relative">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
          <IonRippleEffect className="text-[#f73636]" />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/apps" className="relative">
          <IonIcon icon={apps} />
          <IonLabel>Apps</IonLabel>
          <IonRippleEffect className="text-[#f73636]" />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/activity" className="relative">
          <IonIcon icon={statsChartSharp} />
          <IonLabel>Activity</IonLabel>
          <IonRippleEffect className="text-[#f73636]" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
