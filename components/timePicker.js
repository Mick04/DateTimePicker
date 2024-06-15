import { StyleSheet, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TimePicker({ valDate, onChange }) {
  return (
    <View style={styles.container}>
      <DateTimePicker
        value={valDate}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      {/* ... */}
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
});
