import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./SignUp.style";
import CustomSignButton from "../../components/SignUp/CustomSignButton";
import googleIcon from "../../assets/images/icons/signup/google-512.png";
import iphoneIcon from "../../assets/images/icons/signup/icons8-iphone-se-48.png";
import facebookIcon from "../../assets/images/icons/signup/facebook-512.png";
import spotifyIcon from "../../assets/images/icons/signup/spotify-512.png";
import background from "../../assets/images/icons/signup/Background.png";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setUserState } from "../../redux/slices/ProfileSlice";

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(setUserState());
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={["#0001", "#000", "#000"]}
        style={styles.linearGradient}
      />
      <Image source={background} style={styles.background} />
      <View style={styles.headerContainer}>
        <Image source={spotifyIcon} style={styles.spotifyIcon} />
        <View>
          <Text style={styles.text}>Millions of songs.</Text>
          <Text style={styles.text}>Free on Spotify.</Text>
        </View>
      </View>
      <View style={styles.actionButton}>
        <CustomSignButton
          text={"Sign up free"}
          bckgColor={"#1db954"}
          onPress={handleSignIn}
        />
        <CustomSignButton
          iconSource={iphoneIcon}
          text={"Continue with phone number"}
          onPress={handleSignIn}
        />
        <CustomSignButton
          iconSource={googleIcon}
          text={"Continue with Google"}
          onPress={handleSignIn}
        />
        <CustomSignButton
          iconSource={facebookIcon}
          text={"Continue with facebook"}
          onPress={handleSignIn}
        />
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
