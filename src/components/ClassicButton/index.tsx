import React from 'react';

// Components
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ClassicButton = (): JSX.Element => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>classic button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  button: {
    padding: 10,
    marginVertical: 2,
    backgroundColor: '#22668D',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});