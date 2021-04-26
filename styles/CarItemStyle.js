import { StyleSheet } from "react-native";

const CarItemStyles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titles: {
    paddingTop: "25%",
    paddingBottom: "15%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    // color: Appearance.getColorScheme()==='dark' ? 'black' : 'white' ,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#5C5E62",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  cta: {
    textDecorationLine: 'underline'
  }
});

export default CarItemStyles;
