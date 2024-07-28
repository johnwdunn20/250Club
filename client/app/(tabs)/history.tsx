import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { API_URL } from '@/config';
import { useQuery } from '@tanstack/react-query';

interface ServerResponse {
  message: string;
}

const fetchHistory = async () => {
  const response = await fetch(`${API_URL}/api/test`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default function History() {

  const { isLoading, error, data } = useQuery(['test'], fetchHistory);

  if (isLoading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>An error occurred: {error.message}</ThemedText>;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/barbell.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">250 Club History</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">You play to win the game </ThemedText>
        <ThemedText>
          {`History coming soon - ${message}`}
        </ThemedText>
      </ThemedView>

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
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
