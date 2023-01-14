import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Appbar,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";

const { manifest } = Constants;

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      medicalEmergencyType: "",
      location: "",
    },
  });

  const sendNotification = async (formData) => {
    const message = "Hello from the other side";
    console.log(manifest.debuggerHost);
    const response = await fetch(
      `http://${manifest.debuggerHost.split(":").shift()}:3000/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Appbar.Header>
          <Appbar.Content title="Ambulert" />
        </Appbar.Header>
        <View>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your name"
              />
            )}
          />
          <View style={{ padding: "3%" }}></View>
          <Controller
            name="medicalEmergencyType"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Medical Emergency Type"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your medical emergency type"
              />
            )}
          />
          <View style={{ padding: "3%" }}></View>
          <Controller
            name="location"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Location"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your location"
              />
            )}
          />
          <View style={{ padding: "3%" }}></View>
          <Button
            mode="contained"
            icon="ambulance"
            onPress={handleSubmit(sendNotification)}
            style={{ margin: "3%" }}
          >
            Send Ambulance
          </Button>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
