import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Home from './Feed';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonRouterOutlet>
      <Route path="/feed" render={() => <Home />} exact={true} />
      <Route path="/lists" render={() => <Lists />} exact={true} />
      <Route path="/lists/:listId" render={() => <ListDetail />} exact={true} />
      <Route path="/settings" render={() => <Settings />} exact={true} />
      <Route path="" render={() => <Redirect to="/feed" />} exact={true} />
    </IonRouterOutlet>
  );
};

export default Tabs;
