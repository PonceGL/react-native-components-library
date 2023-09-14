import React from 'react';
// Components
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {ContainerProps} from '../../../interfaces/Container';

import {SafeAreaStyles} from './SafeAreaStyles';

/**
 * The SafeArea function is a TypeScript React component that renders a safe area view with a linear
 * gradient background and customizable colors.
 * @param {ContainerProps}  - - `children`: The content to be rendered within the SafeArea component.
 */
export function SafeArea({
  children,
  screenName,
  statusBarProps,
  topColor,
  bottomColor,
  backgroundColor,
}: ContainerProps): JSX.Element {
  return (
    <LinearGradient
      colors={[
        topColor ?? '#2E3235', // TODO: change by parameterized color
        topColor ?? '#2E3235', // TODO: change by parameterized color
        bottomColor ?? '#2E3235', // TODO: change by parameterized color
        bottomColor ?? '#2E3235', // TODO: change by parameterized color
      ]}
      style={SafeAreaStyles.content}>
      <SafeAreaView
        accessibilityLabel={screenName}
        testID="SafeArea"
        style={SafeAreaStyles.content}>
        <StatusBar
          backgroundColor={topColor ?? '#2E3235'}
          barStyle="light-content"
          {...statusBarProps}
        />
        <View
          style={[
            SafeAreaStyles.content,
            {
              backgroundColor: backgroundColor ?? '#2E3235', // TODO: change by parameterized color
              marginTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            },
          ]}>
          {children}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
