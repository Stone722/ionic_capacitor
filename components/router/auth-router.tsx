import { Redirect, Route } from 'react-router-dom';
import { IonNav, IonRouterOutlet } from '@ionic/react';
import WelcomePage from '../pages/welcome-page/welcome-page';
import CreateWallet from '../pages/create-wallet';

const AuthRouter = () => {
  return (
    <IonRouterOutlet>
      <Route
        path="/welcome"
        render={() => <IonNav root={() => <WelcomePage />}></IonNav>}
        exact={true}
      />
      <Route
        path="/create"
        render={() => <IonNav root={() => <CreateWallet />}></IonNav>}
        exact={true}
      />
      <Route path="" render={() => <Redirect to="/welcome" />} exact={true} />
    </IonRouterOutlet>
  );
};

export default AuthRouter;
``;
