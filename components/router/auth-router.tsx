import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import WelcomePage from '../pages/welcome-page/welcome-page';
import CreateWallet from '../pages/create-wallet/create-wallet';

const AuthRouter = () => {
  return (
    <IonRouterOutlet>
      <Route path="/welcome" render={() => <WelcomePage />} exact={true} />
      <Route path="/create" render={() => <CreateWallet />} exact={true} />
      <Route path="" render={() => <Redirect to="/welcome" />} exact={true} />
    </IonRouterOutlet>
  );
};

export default AuthRouter;
``;
