// App.js
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

// Import custom components for time and temperature selection
import DatePickerModal from "./components/DatePickerModal"; // Adjust the path as necessary
import TemperaturePicker from "./components/TemperaturePicker";

export default function App() {
  // State hooks for managing dates, reset flag, and temperatures
  // const [date1, setDate1] = useState(new Date());
  // const [date2, setDate2] = useState(new Date());
  const [Reset, setReset] = useState(true);
  const [amTemperature, setAmTemperature] = useState(null);
  const [pmTemperature, setPmTemperature] = useState(null);
  const [isAMDatePickerVisible, setAMDatePickerVisibility] = useState(false);
  const [isPMDatePickerVisible, setPMDatePickerVisibility] = useState(false);
  const [AMtime, setAMTime] = useState("");
  const [PMtime, setPMTime] = useState("");

  const handleOpenAMDatePicker = () => setAMDatePickerVisibility(true);
  const handleOpenPMDatePicker = () => setPMDatePickerVisibility(true);
  const handleCloseAMDatePicker = () => setAMDatePickerVisibility(false);
  const handleClosePMDatePicker = () => setPMDatePickerVisibility(false);
  const handleTimeChangeAM = (AMtime) => {
    setAMTime(AMtime);
    console.log(AMtime);
    handleCloseAMDatePicker();
  };
  const handleTimeChangePM = (PMtime) => {
    setPMTime(PMtime);
    console.log(PMtime);
    handleClosePMDatePicker();
  };

  // Toggle the reset state and log current state for debugging
  const handleOnPress = () => {
    setReset(!Reset);
    console.log({ Reset });
  };
  // Handle change for AM TimePicker, converting PM times to AM if necessary

  // const onChange1 = (e, selectedDate) => {
  //   const hours = selectedDate.getHours();
  //   if (hours >= 12) {
  //     Alert.alert("PM Time Selected", "Converting to AM time.");
  //     selectedDate.setHours(hours - 12);
  //   }
  //   setDate1(selectedDate);
  // };
  // // Handle change for PM TimePicker, converting AM times to PM if necessary

  // const onChange2 = (e, selectedDate) => {
  //   const hours = selectedDate.getHours();
  //   if (hours <= 12) {
  //     Alert.alert("AM Time Selected", "Converting to PM time.");
  //     selectedDate.setHours(hours - 12);
  //   }
  //   setDate2(selectedDate);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* Button to toggle the reset state */}

        <TouchableOpacity style={styles.reset} onPress={handleOnPress}>
          <Text style={styles.dataReset}>
            {Reset ? "Press To Reset The Time" : "PRESS WHEN FINISHED"}
          </Text>
          {/* <Text style={styles.dataReset}>{Reset.toString()}</Text> */}
        </TouchableOpacity>
      </View>

      {!Reset && ( // Add this line to conditionally render the TimePicker components START
        <>
          {/* TimePicker components for AM and PM times */}
          <View style={styles.pickerContainer}>
            {/* TemperaturePicker components for AM temperatures */}
            <TemperaturePicker
              label="AM"
              temperature={amTemperature}
              onValueChange={setAmTemperature}
            />
          </View>

          <TemperaturePicker
            label="PM"
            temperature={pmTemperature}
            onValueChange={setPmTemperature}
            // onValueChange={(value) => setPmTemperature(value)}
          />
          <TouchableOpacity
            style={styles.reset}
            onPress={handleOpenAMDatePicker}
          >
            <Text style={styles.dataReset}>Select AM Time</Text>
            <DatePickerModal
              isVisible={isAMDatePickerVisible}
              onClose={handleCloseAMDatePicker}
              onTimeChange={handleTimeChangeAM}
            />
            <Text style={styles.dataText}>AM Time {AMtime}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenPMDatePicker}>
            <Text style={styles.dataReset}>Select PM Time </Text>

            <DatePickerModal
              isVisible={isPMDatePickerVisible}
              onClose={handleClosePMDatePicker}
              onTimeChange={handleTimeChangePM}
            />
            <Text style={styles.dataText}>PM Time {PMtime}</Text>
          </TouchableOpacity>
        </>
      )}
      {/* Add this line to conditionally render the TimePicker components END */}

      {Reset && ( // Add this line to conditionally render the TimePicker components START
        <>
          <Text style={styles.temperatureText}>
            {`AM Temperature:     ${
              amTemperature !== null ? `${amTemperature}°C` : "Not selected"
            }`}
          </Text>
          <Text style={styles.temperatureText}>
            {`PM Temperature:    ${
              pmTemperature !== null ? `${pmTemperature}°C` : "Not selected"
            }`}
          </Text>
        </>
      )}

      <View style={styles.pickerContainer}>
        {Reset && ( // Add this line to conditionally render the TimePicker components
          <>
            <Text style={styles.dataReset}>
              {AMtime !== null ? `${AMtime} AM` : "Not selected"}
            </Text>

            <Text style={styles.dataReset}>
              {PMtime !== null ? `${PMtime} PM` : "Not selected"}
            </Text>
          </>
        )}
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
  pickerContainer: {
    marginBottom: 20,
  },
  temperatureDisplay: {
    marginTop: 30,
    alignItems: "center",
  },
  temperatureText: {
    padding: 10,
    fontSize: 20,
  },
});
