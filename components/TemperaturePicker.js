import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker"; // Import the native picker

const TemperaturePicker = ({ label, temperature, onValueChange }) => {
  // Create an array of temperature options from 0 to 100
  const temperatureOptions = Array.from({ length: 30 }, (_, i) => ({
    label: `${i}°C`,
    value: i,
  }));

  // Render native Picker for Android
  if (Platform.OS === "android") {// Check if the platform is Android
    return (       // Return the native Picker component
      <View style={styles.container}>
        {/* <Text style={styles.label}>{label}   nnnnTemperature:</Text> */}
        <View style={styles.pickerWrapper}>
          <Picker
            // style={{ height: 50, width: 150, fontSize: 16, color: "black" }}
            style={styles.picker}
            itemStyle={{ color: "black" }}
            display="spinner"
            showNativeInput={true}
            selectedValue={temperature}
            onValueChange={(itemValue) => onValueChange(itemValue)}
            mode="dropdown"
          > 
            <Picker.Item
            style={pickerSelectStyles.inputAndroid}
              label="Select a temperature..."
              value="Select a temperature..."
            />
            {temperatureOptions.map((option) => {
              console.log(`Rendering item: ${option.label}`);
              return (
                <Picker.Item
                 style={pickerSelectStyles.inputAndroid}// Add the style prop
                  key={option.value}
                  label={option.label}
                  value={option.label}
                />
              );
            })}
          </Picker>
        </View>
        <Text style={styles.label}>
          {label} Temperature: {temperature}{" "}
        </Text>
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
          style={styles.inputIOS}
          placeholder={{
            label: "Select a temperature...",
            value: true,
          }}
          value={temperature}
          // useNativeAndroidPickerStyle={false} // Use custom styles for Android
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%", // Adjust the width as necessary
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 10 : 15, // Adjust padding for Android
  },
  picker: {
    height: 25,
    width: 250,
  },
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
    fontSize: 24, // Adjust font size if needed
    paddingVertical: 8,
    paddingHorizontal: 10, // Adjust padding to fit within the container
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    fontSize: 16,
    color: "red",
  },
});

export default TemperaturePicker;
