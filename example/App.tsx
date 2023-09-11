/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {ClassicButton, ButtonOutline} from '@poncegl/library';

// Components
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.content}>
        <Text>App</Text>
      </View>
      <ClassicButton />
      <ButtonOutline />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
