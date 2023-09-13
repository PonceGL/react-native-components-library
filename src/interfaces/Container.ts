import type {PropsWithChildren} from 'react';
import {StatusBarProps} from 'react-native/types';

export type ContainerProps = PropsWithChildren<{
  screenName: string;
  statusBarProps?: StatusBarProps;
  topColor?: string;
  bottomColor?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
}>;
