import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function Task({ completeReminder, reminder }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.reminder}>
      <View style={styles.reminderLeft}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#2196F3" : undefined}
        />
        <View style={styles.text}>
          <Text style={styles.itemTitle}>{reminder.reminder}</Text>
          <Text style={styles.itemDate}>{reminder.date.toLocaleString()}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => completeReminder()}>
        <View style={styles.delete}>
          <Text>❌</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  reminder: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  reminderLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  checkbox: {
    margin: 8,
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    flexDirection: "column",
  },
  itemTitle: {
    maxWidth: "80%",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 14,
  },
  delete: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    width: 24,
    height: 24,
  },
});
