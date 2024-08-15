import React from 'react';
import { View, Text, StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';

// Define the shape of each item in the data array
type DataItem = Record<string, string | number>;

// Define the props for the Grid component
interface GridProps {
  data: DataItem[];
}

const Grid: React.FC<GridProps> = ({ data }) => {
  const numColumns = 3;

  const renderGrid = () => {
    return data.map((row, rowIndex) => (
      <View key={`row-${rowIndex}`} style={styles.row}>
        {Object.entries(row).map(([key, value], colIndex) => (
          <View key={`${rowIndex}-${colIndex}`} style={styles.cell}>
            <Text style={styles.cellText}>{`${key}: ${value}`}</Text>
          </View>
        ))}
      </View>
    ));
  };

  return <View style={styles.container}>{renderGrid()}</View>;
};

const { width } = Dimensions.get('window');
const cellSize = width / 3 - 10; // Subtracting 10 for margins

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  cell: ViewStyle;
  cellText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cell: {
    width: cellSize,
    height: cellSize,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Grid;