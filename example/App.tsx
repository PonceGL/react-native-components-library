import React from 'react';
// Components
import {StyleSheet, Text, View} from 'react-native';
import {ButtonOutline, ClassicButton, Content} from '@poncegl/library';

export default function App(): JSX.Element {
  return (
    <Content screenName="Home">
      <View style={styles.content}>
        <Text>App</Text>
        <ClassicButton />
        <ButtonOutline />
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
