import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Header({ children }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
});
