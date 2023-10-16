import type {PropsWithChildren} from 'react';
import {ColorValue, StatusBarProps} from 'react-native/types';

export type ContainerProps = PropsWithChildren<{
  screenName?: string;
  statusBarProps?: StatusBarProps;
  topColor?: ColorValue;
  bottomColor?: ColorValue;
  backgroundColor?: ColorValue;
  fullScreen?: boolean;
}>;
