import React from "react";
import { View, Text, Pressable } from "react-native";
// Styles
import StyledBtnStyle from "../styles/StyledBtnStyle";

const StyledBtn = (props) => {
  const { btnType, content, onPress } = props;

  // DARK:#171A20CC - LIGHT:#FFFFFFA6
  const bgColor = btnType === "primary" ? "#37383DEE" : "#DBD8DAA6";
  const txtColor = btnType === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={StyledBtnStyle.container}>
      <Pressable
        style={[StyledBtnStyle.button, { backgroundColor: bgColor }]}
        onPress={onPress}
      >
        <Text style={[StyledBtnStyle.text, { color: txtColor }]}>
          {content}
        </Text>
      </Pressable>
    </View>
  );
};

export default StyledBtn;
