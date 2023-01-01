import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import AddReminderModal from "./components/AddReminderModal";

export default function App() {
  const [remindersItems, setRemindersItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddReminder = function (reminder) {
    setRemindersItems([...remindersItems, reminder]);
  };

  const deleteReminder = function(id) {
    setRemindersItems((prevRemindersItems) => prevRemindersItems.filter((reminder) => reminder.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.reminderWrapper}>
        <Text style={styles.reminderTitle}>Diaryz Reminders</Text>
        <View style={styles.reminders}>
          {remindersItems.map((reminder) => {
            return (
              <Task
                key={reminder.id}
                reminder={reminder}
                deleteReminder={() => deleteReminder(reminder.id)}
              />
            );
          })}
        </View>
      </View>
        <TouchableOpacity  style={styles.writeReminderWrapper} onPress={() => setModalVisible(true)}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      <AddReminderModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        handleAddReminder={handleAddReminder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  reminderWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  reminderTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  reminders: {
    marginTop: 30,
  },
  writeReminderWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
  },
});
