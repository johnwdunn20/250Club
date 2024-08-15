import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/lib/config';

interface ServerResponse {
  message: string;
}

const fetchHistory = async () => {
  console.log(`URL: ', ${API_URL}/api/test`);
  const response = await fetch(`${API_URL}/api/test`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data =  await response.json();

  return data;
};

export default function History() {

  const queryClient = useQueryClient();

  const {data, isError, isLoading} = useQuery({
    queryKey: ['history'],
    queryFn: fetchHistory,
  });


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
          {`History coming soon - ${
            isLoading
              ? 'Loading...'
              : isError
              ? 'Error loading history'
              : data?.message
            }`
          }
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
