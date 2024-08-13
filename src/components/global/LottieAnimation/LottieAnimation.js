import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function LottieAnimation({ animationSource, style }) {
  return (
    <LottieView style={style} source={require(animationSource)} autoPlay loop />
  );
}
