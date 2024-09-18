import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useSelector } from "react-redux";
import Store from "../redux/Store";
import SignUp from "../screens/SignUp";
import PlaybackControl from "../screens/PlaybackControl";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const AppNavigator = ({ userLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {userLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={BottomTabNavigation} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="PlaybackControl" component={PlaybackControl} />
          </>
        ) : (
          <Stack.Screen name="SignUp" component={SignUp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Router = () => {
  const userLoggedIn = useSelector((state) => state.profile.loggedIn);
  return <AppNavigator userLoggedIn={userLoggedIn} />;
};

const RootComponent = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};

export default RootComponent;
