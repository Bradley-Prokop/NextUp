import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddButton({text,onPress,style} :any) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.addButton, style]}>
      <Text style={styles.addButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    height: 35,
    width: "60%",
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "gold",
    padding: 5,
    justifyContent: "center",
    borderWidth: 3,
  },
  addButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: "auto",
  },
});
