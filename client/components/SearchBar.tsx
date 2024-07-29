import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface SearchBarProps {
  onSearch: (query: string) => void;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  lightBackgroundColor, 
  darkBackgroundColor,
  lightTextColor,
  darkTextColor
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const backgroundColor = useThemeColor(
    { light: lightBackgroundColor, dark: darkBackgroundColor }, 
    'background'
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor }, 
    'text'
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Feather name="search" size={20} color={textColor} style={styles.icon} />
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder="Search..."
        placeholderTextColor={useThemeColor({}, 'tabIconDefault')}
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