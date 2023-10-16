import React, {useRef} from 'react';
// Components
import {Platform, StatusBar, useColorScheme} from 'react-native';

import {ContainerProps} from '../../../types';
import {DEFAULT_VALUES} from '../../organisms/content/defaultValues';

export function CustomStatusBar({
  fullScreen,
  topColor,
  statusBarProps,
}: ContainerProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const isTranslucent = useRef(Platform.OS === 'android' && fullScreen);

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      translucent={isTranslucent.current}
      backgroundColor={
        fullScreen ? 'transparent' : topColor || DEFAULT_VALUES.topColor
      }
      {...statusBarProps}
    />
  );
}
