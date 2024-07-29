import { Image, StyleSheet, Platform } from 'react-native';

import { AnimatedBicep } from '@/components/AnimatedBicep';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Grid from '@/components/Grid';

export default function HomeScreen() {

  // Mock data
const mockData = [
  { name: 'John', age: 30, role: 'Developer' },
  { city: 'New York', country: 'USA', population: '8.4M' },
  { product: 'Laptop', price: '$999', stock: 50 },
  { color: 'Red', hex: '#FF0000', rgb: '255,0,0' },
  { fruit: 'Apple', calories: 95, vitamin: 'C' },
];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Today's Challenge</ThemedText>
        <AnimatedBicep />
      </ThemedView>
      <Grid
        data={mockData}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
