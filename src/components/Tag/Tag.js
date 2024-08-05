import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import styles from "./Tag.style";
export default function Tag({ text, isItActive }) {
  const [tagState, setTagState] = useState(isItActive);
  return (
    <TouchableOpacity
      style={[styles.container, tagState && styles.containerActive]}
      onPress={() => setTagState(!tagState)}
    >
      <Text style={[styles.text, tagState && styles.textActive]}>{text}</Text>
    </TouchableOpacity>
  );
}
