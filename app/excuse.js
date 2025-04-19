import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { getRandomExcuse } from '../services/excuseAPI';
import { Stack } from 'expo-router';

export default function ExcuseScreen() {
  const [excuse, setExcuse] = useState(null);
  const [previousExcuse, setPreviousExcuse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchExcuse = async () => {
    setLoading(true);
    const data = await getRandomExcuse();
    if (excuse) setPreviousExcuse(excuse); // store current as previous
    setExcuse(data.excuse);
    setLoading(false);
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Random Excuse' }} />

      {loading ? (
        <ActivityIndicator size="large" color="#FF5E5E" />
      ) : (
        <>
          <Text style={styles.text}>{excuse}</Text>

          <View style={styles.button}>
            <Button title="Get Another" color="#FF5E5E" onPress={fetchExcuse} />
          </View>

          {previousExcuse && (
            <View style={styles.previousContainer}>
              <Text style={styles.previousLabel}>Last Excuse:</Text>
              <Text style={styles.previous}>{previousExcuse}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  text: {
    fontSize: 22, textAlign: 'center', marginBottom: 20
  },
  button: {
    marginVertical: 10, width: '100%'
  },
  previousContainer: {
    marginTop: 30, paddingHorizontal: 10
  },
  previousLabel: {
    fontSize: 16, fontWeight: '600', color: '#555'
  },
  previous: {
    fontSize: 18, textAlign: 'center', color: '#777', marginTop: 5
  }
});