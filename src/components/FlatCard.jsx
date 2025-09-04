import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const FlatCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,
    flexDirection: "row",
    backgroundColor: colors.white,
    margin:12,
    marginBottom: 1,
    elevation: 10,
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderTopColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderBottomColor: "#808080",
    borderRightColor: "#808080",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
});
