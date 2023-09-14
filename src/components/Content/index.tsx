import React from 'react';

import {ContainerProps} from '../../interfaces/Container';

import {FullScreen} from './FullScreen';
import {SafeArea} from './SafeArea';

/**
 * The `Content` function is a React component that renders either a `FullScreen` or `SafeArea`
 * component based on the `fullScreen` prop.
 * @param {ContainerProps}  - - `children`: The content to be rendered inside the `Content` component.
 * @returns a JSX element. If the `fullScreen` prop is `true`, it returns a `FullScreen` component with
 * the specified props. Otherwise, it returns a `SafeArea` component with the specified props and the
 * `children` passed as its content.
 */
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
