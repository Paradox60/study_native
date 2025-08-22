import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WordsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список слов</Text>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
