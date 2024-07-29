import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SwitchComponent from '@/components/Switch';
import SearchBar from '@/components/SearchBar';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const Connect = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <ThemedView style={styles.container}>
      {/* <SwitchComponent /> */}
      <SearchBar onSearch={() => {
        console.log('searching...');
        return;
      }}/>
      <View style={styles.header}>
        <ThemedText style={styles.title} type="title">Welcome to Our App</ThemedText>
        <Icon name="person-circle-outline" type="ionicon" size={40} />
      </View>
      <ThemedText type="subtitle">We are glad to have you here</ThemedText>
      <ThemedText type="default">
        Discover the amazing features we have to offer. Our app provides a seamless experience that helps you stay connected and productive.
      </ThemedText>
      <Button
        title="Get Started"
        // buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => { /* Add navigation or action here */ }}
      />
      <ThemedText type="link">
        Learn more about us
      </ThemedText>
    </ThemedView>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#2089dc',
  },
});

export default Connect;
