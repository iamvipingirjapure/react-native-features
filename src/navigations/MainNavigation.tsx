import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import { Routes } from './Routes';
import SplashScreen from '../screens/intro/SplashScreen';
import OnboardingScreen from '../screens/intro/onboarding/OnboardingScreen';
import Login from '../screens/onboarding/Login';
import SignUp from '../screens/onboarding/SignUp';
import LocationAccessScreen from '../screens/location_access/LocationAccessScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.HomeScreen}
    >
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
      <Stack.Screen
        name={Routes.OnboardingScreen}
        component={OnboardingScreen}
      />
      <Stack.Screen name={Routes.LoginScreen} component={Login} />
      <Stack.Screen name={Routes.SignUpScreen} component={SignUp} />
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={Routes.LocationAccessScreen}
        component={LocationAccessScreen}
      />
      <Stack.Screen name={Routes.Cart} component={Cart} />
      <Stack.Screen name={Routes.Favourites} component={Favourites} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
