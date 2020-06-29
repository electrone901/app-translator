import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Main from './Main';
import ImageUpload from './ImageUpload';

const RouterArea = () => {
  return (
    <Router>
      <Scene key="body" hideNavBar>
        <Scene key="main" initial>
          <Scene component={Main} title="Main" />
        </Scene>
        <Scene key="imageUpload">
          <Scene component={ImageUpload} title="Image upload" />
        </Scene>
        {/* <Scene key="login">
          <Scene component={Login} title="Login" />
        </Scene>

        <Scene key="register">
          <Scene component={Register} title="Register" />
        </Scene>

        <Scene key="main" initial>
          <Scene key="deals" component={Deals} title="List of Deals" />
          <Scene key="deal" component={Deal} title="Your Deal" />
          <Scene key="userProfile" component={UserProfile} title="Profile" />
          <Scene
            key="editProfile"
            component={EditProfile}
            title="Edit Profile"
          />
        </Scene>
        <Scene key="yourProfile">
          <Scene component={UserProfile} title="Your Profile" initial />
          <Scene key="deal" component={Deal} title="Deal" />
          <Scene
            key="editProfile"
            component={EditProfile}
            title="Edit Profile"
          />
        </Scene>
        <Scene key="addDeal">
          <Scene component={AddDeal} title="Add Deal" />
        </Scene> */}
      </Scene>
    </Router>
  );
};

export default RouterArea;
