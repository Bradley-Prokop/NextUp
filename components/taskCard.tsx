import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function TaskCard({ description, onPress }: any) {
  
    const handlePress = () => {
    Alert.alert(
      "Delete Task",
      `Are you sure you want to delete "${description}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes, I'm sure!", onPress: onPress }
      ]
    );
  };

  return (
    <View style={styles.task_card_container}>
      <Text style={styles.description} numberOfLines={0}>
        {description}
      </Text>
      <TouchableOpacity style={styles.complete} onPress={handlePress}>
        <Text>Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  task_card_container: {
    flexDirection: "row",
    justifyContent: "space-between", // space between text and button
    alignItems: "center",
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 50,
    backgroundColor: "",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  description: {
    flex: 1, // ✅ lets it shrink/wrap instead of pushing button away
    flexWrap: "wrap", // ✅ wraps text
    color: "white",
    fontSize: 16,
  },
  complete: {
    backgroundColor: "lime",
    padding: 5,
    borderWidth: 1,
    borderColor: "darkgreen",
    borderRadius: 5,
  },
});
