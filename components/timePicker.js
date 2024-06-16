import { Platform } from "react-native";
import React, { useState } from "react";
import { StyleSheet, View,Text, Button, } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TimePicker({ valDate, onChange }) {
  const [show, setShow] = useState(false);
  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || valDate;
    setShow(Platform.OS === 'ios');
    // setShow(false); // Hide after selection on Android
    onChange(event, currentDate);
  };

  return (
    <View style={styles.container}>
      <Button title="Reset Time" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={valDate}
          mode={"time"}
          onChange={handleChange}
          is24Hour={true}
          display="spinner"
        />
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
    reset: {
      backgroundColor: "#fff",
      alignItems: "top",
      justifyContent: "center",
      margin: 10,
    },
  }); 

