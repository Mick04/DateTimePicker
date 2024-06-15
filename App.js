import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import TimePicker from "./components/timePicker";

export default function App() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [Reset, setReset] = useState(false);

  const handleOnPress = () => {
    setReset(!Reset);
    console.log({ Reset });
  };

  const onChange1 = (e, selectedDate) => {
    const hours = selectedDate.getHours();
    if (hours >= 12) {
      Alert.alert("PM Time Selected", "Converting to AM time.");
      selectedDate.setHours(hours - 12);
    }
    setDate1(selectedDate);
  };
  const onChange2 = (e, selectedDate) => {
    const hours = selectedDate.getHours();
    if (hours <= 12) {
      Alert.alert("AM Time Selected", "Converting to PM time.");
      selectedDate.setHours(hours - 12);
    }
    setDate2(selectedDate);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.reset} onPress={handleOnPress}>
        <Text style={styles.dataReset}>
          {Reset ? "Press To Reset The Time" : "PRESS WHEN FINISHED"}
        </Text>
        <Text style={styles.dataReset}>{Reset.toString()}</Text>
      </TouchableOpacity>
      {!Reset && ( // Add this line to conditionally render the TimePicker components
        <>
          <TimePicker valDate={date1} onChange={onChange1} />
        </>
      )}
      <Text style={styles.dataText}>
        AM Time {date1.toLocaleTimeString()}
        {Reset}
      </Text>
      {!Reset && ( // Add this line to conditionally render the TimePicker components
        <>
          <TimePicker valDate={date2} onChange={onChange2} />
        </>
      )}
      <Text style={styles.dataText}>PM Time {date2.toLocaleTimeString()}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dataText: {
    backgroundColor: "#fff",
    color: "red",
    margin: 20,
    fontSize: 20,
  },
  dataReset: {
    fontSize: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  reset: {
    justifyContent: "center",
    alignItems: "center",
    // Add any additional styling you need for the TouchableOpacity here
  },
});
