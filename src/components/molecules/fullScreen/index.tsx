import React, {Children} from 'react';
import {View} from 'react-native';

import {ContainerProps} from '../../../types/content';
import {DEFAULT_VALUES} from '../../organisms/content/defaultValues';

import {styles} from './styles';

export function FullScreen({
  children,
  screenName,
  backgroundColor,
}: ContainerProps): JSX.Element {
  return (
    <View
      style={[
        styles.content,
        {
          backgroundColor: backgroundColor || DEFAULT_VALUES.backgroundColor,
        },
      ]}
      accessibilityLabel={screenName}>
      {Children.only(children)}
    </View>
  );
}
