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

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.48 7.305c1.362-.454 3.195-.722 5.187-.722 1.99 0 3.825.268 5.187.722.677.226 1.279.511 1.727.864.44.347.836.847.836 1.498V15c0 .582-.32 1.045-.696 1.38-.377.335-.883.608-1.447.83a.75.75 0 0 1-1.003-.876l1.095-4.494a8.44 8.44 0 0 1-.512.188c-1.362.454-3.196.722-5.187.722-1.992 0-3.825-.268-5.187-.722a7.295 7.295 0 0 1-1.063-.442v1.747a.75.75 0 0 1-1.5 0V9.667c0-.65.396-1.151.835-1.498.449-.353 1.05-.638 1.728-.864Zm-1.063 2.363v-.001c0-.003 0-.027.031-.078a.987.987 0 0 1 .233-.241c.26-.206.683-.423 1.273-.62 1.172-.39 2.838-.645 4.713-.645 1.874 0 3.54.255 4.712.645.59.197 1.013.414 1.273.62.128.1.198.184.233.24a.342.342 0 0 1 .02.037l-.035.143a1.07 1.07 0 0 1-.218.218c-.26.205-.683.422-1.273.62-1.171.39-2.838.644-4.712.644-1.875 0-3.541-.254-4.713-.645-.59-.197-1.013-.414-1.273-.62a.987.987 0 0 1-.233-.24c-.03-.049-.031-.072-.031-.077Z"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.146 15.639c1.362-.454 3.196-.722 5.187-.722 1.992 0 3.825.268 5.187.722.677.225 1.28.51 1.727.864.44.346.836.847.836 1.497v5.333c0 .65-.396 1.151-.836 1.498-.448.353-1.05.638-1.727.864-1.362.454-3.195.722-5.187.722-1.99 0-3.825-.268-5.187-.722-.677-.226-1.279-.511-1.727-.864-.44-.347-.836-.847-.836-1.498V18c0-.65.396-1.15.836-1.497.448-.354 1.05-.639 1.727-.864ZM7.083 18V18c0-.003 0-.026.032-.078a.988.988 0 0 1 .233-.241c.26-.205.683-.423 1.273-.62 1.171-.39 2.838-.644 4.712-.644 1.875 0 3.541.254 4.713.645.59.196 1.013.414 1.273.619.128.1.198.184.233.241.032.052.031.075.031.078 0 .006-.001.03-.031.078a.986.986 0 0 1-.233.241c-.26.205-.683.423-1.273.62-1.172.39-2.838.644-4.713.644-1.874 0-3.54-.254-4.712-.645-.59-.196-1.013-.414-1.273-.619a.986.986 0 0 1-.233-.241c-.03-.049-.032-.072-.032-.077Zm0 1.918v3.414c0 .004 0 .027.032.078.035.057.105.14.233.241.26.206.683.423 1.273.62 1.171.39 2.838.645 4.712.645 1.875 0 3.541-.255 4.713-.645.59-.197 1.013-.414 1.273-.62a.986.986 0 0 0 .233-.24c.032-.052.031-.075.031-.078v-3.415c-.32.168-.68.315-1.063.442-1.362.454-3.195.722-5.187.722-1.99 0-3.825-.268-5.187-.722a7.298 7.298 0 0 1-1.063-.442Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const AppsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.583 9A3.417 3.417 0 0 1 9 5.583h2A3.417 3.417 0 0 1 14.417 9v2A3.417 3.417 0 0 1 11 14.417H9A3.417 3.417 0 0 1 5.583 11V9ZM9 7.083A1.917 1.917 0 0 0 7.083 9v2c0 1.059.858 1.917 1.917 1.917h2A1.917 1.917 0 0 0 12.917 11V9A1.917 1.917 0 0 0 11 7.083H9Zm9.917 2.25a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 1 1 0 1.5h-2.25v2.25a.75.75 0 1 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75ZM5.583 21A3.417 3.417 0 0 1 9 17.583h2A3.417 3.417 0 0 1 14.417 21v2A3.417 3.417 0 0 1 11 26.417H9A3.417 3.417 0 0 1 5.583 23v-2ZM9 19.083A1.917 1.917 0 0 0 7.083 21v2c0 1.059.858 1.917 1.917 1.917h2A1.917 1.917 0 0 0 12.917 23v-2A1.917 1.917 0 0 0 11 19.083H9Zm12-1.5A3.417 3.417 0 0 0 17.583 21v2A3.417 3.417 0 0 0 21 26.417h2A3.417 3.417 0 0 0 26.417 23v-2A3.417 3.417 0 0 0 23 17.583h-2ZM19.083 21c0-1.058.858-1.917 1.917-1.917h2c1.059 0 1.917.859 1.917 1.917v2A1.917 1.917 0 0 1 23 24.917h-2A1.917 1.917 0 0 1 19.083 23v-2Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.333 15.667H11l2.667-9.334 4.666 19.334 2.667-10h4.667"
    ></path>
  </svg>
);
