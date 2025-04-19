// app/category.js

import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
import { getCategoryExcuse } from '../services/excuseAPI';

export default function CategoryScreen() {
  const { type } = useLocalSearchParams();
  const [excuse, setExcuse] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategoryExcuse = async () => {
    setLoading(true);
    try {
      const data = await getCategoryExcuse(type);
      setExcuse(data.excuse);
    } catch (err) {
      setExcuse('Failed to fetch excuse.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryExcuse();
  }, [type]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Excuse
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#9C27B0" />
      ) : (
        <Text style={styles.text}>{excuse}</Text>
      )}
      <Button title="🔁 New Excuse" onPress={fetchCategoryExcuse} color="#9C27B0" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 20,
  },
  heading: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#9C27B0',
  },
  text: {
    fontSize: 22, textAlign: 'center', marginBottom: 20,
  },
});