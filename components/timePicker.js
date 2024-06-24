import { Modal, Platform } from "react-native";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Button, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TimePicker({ valDate, onChange }) {
  const [show, setShow] = useState(false);

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || valDate;
    setShow(Platform.OS === "ios"); // Keep the picker open on iOS after selection
    onChange(event, currentDate);
  };

  const handleDone = () => {
    setShow(false); // This will hide the DateTimePicker modal
  };


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          style={styles.reset}
          title="Reset Time"
          onPress={() => setShow(true)}
        />
        <Text>{valDate.toLocaleTimeString()}</Text>
   {Platform.OS === "android" && show ? (   
      <DateTimePicker
      style={{flex: 1, width: 200, height: 200, backgroundColor: "white"}}
        value={valDate}
        mode="time"
        onChange={handleChange} 
        is24Hour={true}
        display="slide" // You might want to use 'default' or 'spinner' based on your preference
      />
    ) : (
        <Modal
          visible={show}
          transparent={true}
          animationType="slide"
          onRequestClose={handleDone}
        >
          <View style={styles.modalView}>
            <DateTimePicker
              value={valDate}
              mode={"time"}
              onChange={handleChange}
              is24Hour={true}
              display="spinner"
            />
            <Button title="Done" onPress={handleDone} />
          </View>
        </Modal>
      )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  // reset: {
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   margin: 10,
  //   paddingBottom: 10,
  // },
  modalView: {
    marginTop: 50,
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
});
