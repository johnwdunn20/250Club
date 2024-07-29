import React from 'react';
import { StyleSheet, View, Keyboard, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchBar from '@/components/SearchBar';

const Connect = () => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <Pressable onPress={handlePressOutside} style={styles.pressable}>
      <ThemedView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar 
            onSearch={() => {
              console.log('searching...');
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <ThemedText style={styles.title} type="subtitle">
            Start typing to see potential workout partners
          </ThemedText>
          {/* Add more content here */}
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
  },
  searchBarContainer: {
    paddingTop: 20, // Adjust this value as needed
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
});

export default Connect;