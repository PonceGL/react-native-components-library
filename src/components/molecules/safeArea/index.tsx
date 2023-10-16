import React, {Children} from 'react';
import {SafeAreaView, View} from 'react-native';

import {ContainerProps} from '../../../types/content';
import {DEFAULT_VALUES} from '../../organisms/content/defaultValues';

import {styles} from './styles';

export function SafeArea({
  children,
  screenName,
  backgroundColor,
}: ContainerProps): JSX.Element {
  return (
    <SafeAreaView
      style={styles.content}
      testID={`SafeArea-${screenName ?? DEFAULT_VALUES.screenName}`}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: backgroundColor || DEFAULT_VALUES.backgroundColor,
          },
        ]}>
        {Children.only(children)}
      </View>
    </SafeAreaView>
  );
}
