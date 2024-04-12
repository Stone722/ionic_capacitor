import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import WelcomePage from '../pages/welcome-page/WelcomePage';
import CreateWallet from '../pages/create-wallet/CreateWallet';
import Feed from '../pages/home';

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
