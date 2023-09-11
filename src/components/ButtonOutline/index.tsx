import React from 'react';
// Components
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export function ButtonOutline(): JSX.Element {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button Outline</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  button: {
    padding: 10,
    marginVertical: 2,
    borderWidth: 2,
    borderColor: '#22668D',
    borderRadius: 4,
  },
  buttonText: {
    color: '#22668D',
    textAlign: 'center',
  },
});
