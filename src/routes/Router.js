import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigation from "./BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
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
  );
};

export default Router;
