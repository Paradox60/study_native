import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главный экран</Text>
      <Button 
        title="Слова" 
        onPress={() => navigation.navigate('Words')}
      />
      <Button 
        title="Тренировка" 
        onPress={() => navigation.navigate('Training')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
