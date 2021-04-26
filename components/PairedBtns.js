import React from "react";
import { View } from "react-native";
// Styles
import PairedBtnsStyle from "../styles/PairedBtnsStyle";
// Components
import StyledBtn from "../components/StyledBtn";

const PairedBtns = (props) => {
  return (
    <View style={PairedBtnsStyle.container}>
      <StyledBtn
        btnType="primary"
        content="Custom Order"
        onPress={() => console.warn("Custom order")}
      />

      <StyledBtn
        btnType="secondary"
        content="Existing inventory"
        onPress={() => console.warn("Existing inventory")}
      />
    </View>
  );
};

export default PairedBtns;
