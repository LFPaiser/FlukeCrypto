import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  let initialScreen = null;

  function onAuthStateChanged(authUser: any) {
    setUser(authUser);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  !user ? (initialScreen = 'SignIn') : (initialScreen = 'Dashboard');

  return (
    <Auth.Navigator
      initialRouteName={initialScreen}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f5f5f8' },
      }}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Dashboard" component={Dashboard} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
