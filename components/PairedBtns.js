import React from "react";
import { View, Text, Pressable } from "react-native";
// Styles
import PairedBtnsStyle from "../styles/PairedBtnsStyle";

const PairedBtns = (props) => {
  return (
    <View style={PairedBtnsStyle.container}>
      <Pressable
        style={PairedBtnsStyle.button}
        onPress={() => console.warn("hey")}
        >
            <Text style={PairedBtnsStyle.text}>Custom Order</Text>
      </Pressable>

      <Pressable
        style={PairedBtnsStyle.button}
        onPress={() => console.warn("hey")}
        >
            <Text style={PairedBtnsStyle.text}>Existing Inventory</Text>
      </Pressable>
    </View>
  );
};

export default PairedBtns;
