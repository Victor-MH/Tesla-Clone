import { StyleSheet } from "react-native";

const StyledBtnStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 12,
  },
});

export default StyledBtnStyle;
