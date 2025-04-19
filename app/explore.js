// app/explore.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

const categories = [
  { name: 'Apology', emoji: '🙇', key: 'apology' },
  { name: 'Attendance', emoji: '📋', key: 'attendance' },
  { name: 'College', emoji: '🎓', key: 'college' },
  { name: 'Family', emoji: '👨‍👩‍👧‍👦', key: 'family' },
  { name: 'Health', emoji: '🩺', key: 'health' },
  { name: 'Late', emoji: '⏰', key: 'late' },
  { name: 'Online Class', emoji: '🧑‍💻', key: 'onlineclass' },
  { name: 'Romantic', emoji: '💘', key: 'romantic' },
  { name: 'School', emoji: '🏫', key: 'school' },
  { name: 'Silly & Cute', emoji: '🤪', key: 'sillycute' },
  { name: 'Travel', emoji: '✈️', key: 'travel' },
  { name: 'Work', emoji: '💼', key: 'work' },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Excuse Categories</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search category..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {filteredCategories.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={styles.button}
            onPress={() => router.push(`/category?type=${cat.key}`)}
          >
            <Text style={styles.buttonText}>
              {cat.name} {cat.emoji}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingBottom: 40,
    alignItems: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});