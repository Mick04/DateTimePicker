import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { useState } from "react";

import TimePicker from "./components/timePicker";

export default function App() {
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [date3, setDate3] = useState(new Date());

  const valDate = date1;

  const onChange1 = (e, selectedDate) => {
    setDate1(selectedDate);
  };
  const onChange2 = (e, selectedDate) => {
    setDate2(selectedDate);
  };
  const onChange3 = (e, selectedDate) => {
    setDate3(selectedDate);
  };

  return (
    <View style={styles.container}>
      {/* ... */}
      <TimePicker valDate={date1} onChange={onChange1} />
      {/* ... */}
      {/* ... */}
      <TimePicker valDate={date2} onChange={onChange2} />
      {/* ... */}
      {/* ... */}
      <TimePicker valDate={date3} onChange={onChange3} />
      {/* ... */}
        <Text style={styles.dataText}>{date1.toLocaleString()}</Text>
        <Text style={styles.dataText} >{date2.toLocaleString()}</Text>
        <Text style={styles.dataText}>{date3.toLocaleString()}</Text>
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
    margin: 10,
  },
});
