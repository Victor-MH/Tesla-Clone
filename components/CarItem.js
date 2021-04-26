import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Styles
import CarItemStyles from "../styles/CarItemStyle";
// Components
import PairedBtns from "./PairedBtns";

export const CarItem = (props) => {
  const { backImg, title, subtitle, cta } = props.car;

  return (
    <View style={CarItemStyles.carContainer}>
      <ImageBackground source={backImg} style={CarItemStyles.imageBackground} />
      <LinearGradient
        colors={["#0009", "#0000"]}
        start={{
          x: 0.5,
          y: 0,
        }}
        end={{
          x: 0.5,
          y: 1,
        }}
        style={{ width: "100%" }}
      >
        <View style={CarItemStyles.titles}>
          <Text style={CarItemStyles.title}>{title}</Text>
          <Text style={CarItemStyles.subtitle}>
            {subtitle}
            {' '}
            {cta ? 
              <Text style={CarItemStyles.cta}>{cta}</Text> :
              <View></View>}
          </Text>
        </View>
      </LinearGradient>

      <PairedBtns />
    </View>
  );
};

export default CarItem;
