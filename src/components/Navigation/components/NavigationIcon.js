import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

const NavigationIcon = ({ iconName, isFocused }) => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon
        name={iconName}
        size={32}
        style={{ color: isFocused ? "#ff7400" : "#3C3C3C" }}
      />
    </View>
  );
};

export default NavigationIcon