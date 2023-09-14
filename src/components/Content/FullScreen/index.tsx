import React from 'react';
// Components
import {StatusBar, useColorScheme, View} from 'react-native';

import {ContainerProps} from '../../../interfaces/Container';

import {FullScreenStyles} from './FullScreenStyles';

/**
 * The FullScreen function is a TypeScript React component that renders a full-screen container with a
 * customizable background color and status bar.
 * @param {ContainerProps}  - - `children`: The content to be rendered inside the FullScreen component.
 * @returns The FullScreen component is returning a JSX.Element.
 */
export function FullScreen({
  children,
  screenName,
  statusBarProps,
  backgroundColor,
}: ContainerProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      accessibilityLabel={screenName}
      testID="FullScreen"
      style={[
        FullScreenStyles.content,
        {
          backgroundColor: backgroundColor ?? 'transparent', // TODO: change by parameterized color
        },
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor="transparent"
        {...statusBarProps}
      />
      {children}
    </View>
  );
}
