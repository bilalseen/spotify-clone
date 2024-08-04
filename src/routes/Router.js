import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigation from "./BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "../redux/Store";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
