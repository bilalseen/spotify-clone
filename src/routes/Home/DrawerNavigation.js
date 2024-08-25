import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import HomeScreen from "../../screens/Home";
import ListeningHistory from "../../screens/History/ListeningHistory";
import AddAccount from "../../screens/Account/AddAccount";
import Updates from "../../screens/Updates/Updates";
import SettingsAndPrivacy from "../../screens/Settings/SettingsAndPrivacy";
import { useSelector } from "react-redux";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const profile = useSelector((state) => state.profile);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => null} style={styles.profileContainer}>
        <Image
          source={{ uri: profile.profileImage }}
          style={styles.profileImage}
        />
        <View>
          <Text st  yle={styles.profileName}>{profile.firstName}</Text>
          <Text style={styles.profileSubtitle}>Profil görüntüle</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddAccount")}
          style={styles.menuItem}
        >
          <AntDesign name="plus" size={24} color="#fff" />
          <Text style={styles.menuText}>Hesap ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ListeningHistory")}
          style={styles.menuItem}
        >
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={24}
            color="#fff"
          />
          <Text style={styles.menuText}>Yenilikler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Updates")}
          style={styles.menuItem}
        >
          <MaterialCommunityIcons name="history" size={24} color="#fff" />
          <Text style={styles.menuText}>Dinleme geçmişi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsAndPrivacy")}
          style={styles.menuItem}
        >
          <Feather name="settings" size={24} color="#fff" />
          <Text style={styles.menuText}>Ayarlar ve gizlilik</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: { backgroundColor: "#242224", width: "80%" },
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AddAccount" component={AddAccount} />
      <Drawer.Screen name="ListeningHistory" component={ListeningHistory} />
      <Drawer.Screen name="Updates" component={Updates} />
      <Drawer.Screen name="SettingsAndPrivacy" component={SettingsAndPrivacy} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    gap: 10,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  profileSubtitle: {
    color: "#a09fa1",
  },
  separator: {
    backgroundColor: "#363537",
    height: 1,
    width: "100%",
  },
  menuContainer: {
    gap: 20,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DrawerNavigation;
