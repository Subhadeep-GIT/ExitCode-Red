// app/index.js

import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Set the header title */}
      <Stack.Screen options={{ title: 'ExitCode:Red' }} />

      <Text style={styles.title}>Exit Code Red 🧨</Text>

      <View style={styles.buttonContainer}>
        <Button title="Get Random Excuse" onPress={() => router.push('/excuse')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Explore by Category" onPress={() => router.push('/explore')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%'
  }
});