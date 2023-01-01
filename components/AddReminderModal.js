import { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddReminderModal({
  modalVisible,
  setModalVisible,
  handleAddReminder,
}) {
  const [date, setDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
  const [reminder, setReminder] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const closeModalAndSubmitReminder = function () {
    handleAddReminder({
      reminder,
      date,
      id: Math.floor(Math.random() * 1000000),
    });
    setModalVisible(false);
    setReminder(null);
  };

  const cancelModal = function () {
    setModalVisible(false);
    setReminder(null);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalText}
            placeholder="Create a reminder..."
            value={reminder}
            onChangeText={(text) => setReminder(text)}
          />
          {Platform.OS === "ios" ? (
            <>
              <DateTimePicker
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
                style={styles.datetime}
              />
              <DateTimePicker
                value={date}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
              />
            </>
          ) : (
            <View style={styles.android}>
              <Pressable style={styles.button} onPress={() => showMode("date")}>
                <Text style={styles.textStyle}>Add Date</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => showMode("time")}>
                <Text style={styles.textStyle}>Add Time</Text>
              </Pressable>
            </View>
          )}
          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={() => cancelModal()}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => closeModalAndSubmitReminder()}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    display: "flex",
    width: "90%",
    height: "40%",
    minHeight: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttons: {
    display: "flex",
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 10,
    backgroundColor: "#2196F3",
    width: 90,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: "15%",
    textAlign: "center",
    borderRadius: 5,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    fontWeight: "bold",
    padding: 20,
    width: "80%",
  },
  datetime: {
    margin: 10,
  },
  android: { flexDirection: "row" },
});
