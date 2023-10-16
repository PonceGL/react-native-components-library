import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Content} from '@poncegl/library';

import {Section} from './components/Section';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#f9a8d4',
  };

  return (
    <Content
      screenName="App"
      fullScreen={Platform.OS === 'android'}
      topColor="#f9a8d4"
      backgroundColor={isDarkMode ? Colors.black : Colors.white}
      bottomColor={isDarkMode ? Colors.black : Colors.white}>
      <View style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="never"
          bounces={false}
          style={backgroundStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            @poncegl/library
          </Text>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              <Text>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              <Text>Read the docs to discover what to do next:</Text>
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 30,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
