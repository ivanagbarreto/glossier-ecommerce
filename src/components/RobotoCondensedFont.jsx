import { Text } from "react-native";
import React from "react";

const RobotoCondensedText = ({ children }) => {
  return (
    <Text style={{ fontFamily: "RobotoCondensed-Regular", textTransform: "uppercase", letterSpacing: 2 }}>{children}</Text>
  );
};

export default RobotoCondensedText;
