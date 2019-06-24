import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sentry from "@sentry/browser";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey HazAT, hope this is helpful!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
