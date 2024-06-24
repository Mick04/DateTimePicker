import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker"; // Import the native picker

const TemperaturePicker = ({ label, temperature, onValueChange }) => {
  // Create an array of temperature options from 0 to 100
  const temperatureOptions = Array.from({ length: 101 }, (_, i) => ({
    label: `${i}°C`,
    value: i,
  }));

  // Render native Picker for Android
  if (Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label} Temperature:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={temperature}
            onValueChange={(itemValue) => onValueChange(itemValue)}
            style={styles.pickerAndroid} // Updated style
          >
            <Picker.Item label="Select a temperature..." value={null} />
            {temperatureOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }

  // Fallback to RNPickerSelect for iOS
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} Temperature:</Text>
      <View style={styles.pickerWrapper}>
        <RNPickerSelect
          onValueChange={onValueChange}
          items={temperatureOptions}
          style={pickerSelectStyles}
          placeholder={{ label: "Select a temperature...", value: null }}
          value={temperature}
          useNativeAndroidPickerStyle={false} // Use custom styles for Android
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
    width: "80%", // Adjust the width as necessary
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 5 : 0, // Adjust padding for Android
  },
  // pickerAndroid: {
  //   height: 50,
  //   width: "100%",
  // },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "red",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 100,
    borderWidth:5.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    // paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: "red",
  },
});

export default TemperaturePicker;
