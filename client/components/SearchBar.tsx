import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
      <View style={styles.container}>
        <Feather name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;