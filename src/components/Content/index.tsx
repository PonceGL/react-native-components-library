import React from 'react';

import {ContainerProps} from '../../interfaces/Container';

import {FullScreen} from './FullScreen';
import {SafeArea} from './SafeArea';

export function Content({
  children,
  screenName,
  statusBarProps = {},
  topColor,
  bottomColor,
  backgroundColor,
  fullScreen = false,
}: ContainerProps): JSX.Element {
  const isString = typeof screenName === 'string';
  if (!isString) {
    console.warn("The 'screenName' property must be a string");
  }

  if (fullScreen) {
    return (
      <FullScreen
        screenName={isString ? screenName : ''}
        statusBarProps={statusBarProps}
        backgroundColor={backgroundColor}
      />
    );
  }

  return (
    <SafeArea
      screenName={screenName}
      statusBarProps={statusBarProps}
      topColor={topColor}
      bottomColor={bottomColor}
      backgroundColor={backgroundColor}>
      {children}
    </SafeArea>
  );
}
