import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import DrawerNavigation from "./Home/DrawerNavigation";
import SearchScreen from "../screens/Search";

import LibraryScreen from "../screens/Library";
import LucideIcons from "../components/global/LucideIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderTopWidth: 0,
          elevation: 0,
          zIndex: 1,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#b3b3b3",
      }}
    >
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <LucideIcons name="House" color={color} size={size} />
          ),
          tabBarLabel: "Anasayfa",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <LucideIcons name="Search" color={color} size={size} />
          ),
          tabBarLabel: "Arama",
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <LucideIcons name="Library" color={color} size={size} />
          ),
          tabBarLabel: "Kütüphane",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
