import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';

import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './auth_components/signup_container';
import SigninContainer from './auth_components/signin_container';
import GuestLoginContainer from './auth_components/splash_container';
import ChannelMessages from './protected_components/channels/channel_messages';
import SideBar from './protected_components/side_bar/side_bar';

const App = () => (
  <div className="app">
      <Route exact path="/" component={GuestLoginContainer} />
      <AuthRoute path="/" component={NavBarContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={SigninContainer} />
      <ProtectedRoute path='/messages' component={SideBar} />
      <ProtectedRoute path='/messages/channels/:channelId' component={ChannelMessages} />
  </div>
);

export default App;
