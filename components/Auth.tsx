import React, { useState } from "react";
import { Alert, StyleSheet, View, AppState, Text } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "@rneui/themed";
import { useForm } from "react-hook-form";
import { Redirect } from "expo-router";

// Supabase Auth listener (unchanged)
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    return <Redirect href="/" />;
  }

  async function signUpWithEmail() {
    setLoading(true);
    console.log(`email: ${email}, password: ${password}`);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);

    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>250 Club</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope", color: "#007AFF" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            containerStyle={styles.input}
            inputContainerStyle={styles.inputField}
            labelStyle={styles.inputLabel}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="Password"
            leftIcon={{ type: "font-awesome", name: "lock", color: "#007AFF" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            containerStyle={styles.input}
            inputContainerStyle={styles.inputField}
            labelStyle={styles.inputLabel}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            disabled={loading}
            onPress={() => signInWithEmail()}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            disabledStyle={styles.disabledButton}
            disabledTitleStyle={styles.disabledButtonText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign up"
            disabled={loading}
            onPress={() => signUpWithEmail()}
            buttonStyle={[styles.button, styles.secondaryButton]}
            titleStyle={[styles.buttonText, styles.secondaryButtonText]}
            disabledStyle={styles.disabledButton}
            disabledTitleStyle={styles.disabledButtonText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 0,
  },
  inputField: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  inputLabel: {
    color: '#333',
    fontWeight: 'normal',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  disabledButtonText: {
    color: '#666',
  },
});