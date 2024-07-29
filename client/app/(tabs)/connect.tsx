import React from 'react';
import { StyleSheet, View, Keyboard, Pressable, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchBar from '@/components/SearchBar';

const Connect = () => {
  const handlePressOutside = () => {
    if (Platform.OS !== 'web') {
      Keyboard.dismiss();
    }
  };

  return (
    <Pressable onPress={handlePressOutside} style={styles.pressable}>
      <ThemedView style={styles.container}>
        <SearchBar 
          onSearch={() => {
            console.log('searching...');
          }}
        />
        <View style={styles.header}>
          <ThemedText style={styles.title} type="subtitle">
            Start typing to see potential workout partners
          </ThemedText>
        </View>
      </ThemedView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
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
});

export default Connect;