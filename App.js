import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, View, Text } from "react-native";
import { useState } from "react";

import TimePicker from "./components/timePicker";

export default function App() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());

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
      <TimePicker valDate={date1} onChange={onChange1} />
      <Text style={styles.dataText}>AM Time {date1.toLocaleTimeString()}</Text>
      <TimePicker valDate={date2} onChange={onChange2} />
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
  },
});
