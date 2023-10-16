import React from 'react';
import {View} from 'react-native';

import {ContainerProps} from '../../../types/content';
import {CustomStatusBar} from '../../atoms/customStatusBar';
import {FullScreen} from '../../molecules/fullScreen';
import {SafeArea} from '../../molecules/safeArea';

import {DEFAULT_VALUES} from './defaultValues';
import {styles} from './styles';

export function Content(props: ContainerProps): JSX.Element {
  const {children, fullScreen, topColor, bottomColor} = props;

  return (
    <View
      style={[
        styles.content,
        {
          backgroundColor: topColor ?? DEFAULT_VALUES.topColor,
        },
      ]}>
      <CustomStatusBar {...props} />
      {fullScreen ? (
        <FullScreen {...props}>{children}</FullScreen>
      ) : (
        <SafeArea {...props}>{children}</SafeArea>
      )}
      {bottomColor && (
        <View
          style={[
            styles.bottomArea,
            {
              backgroundColor: bottomColor ?? DEFAULT_VALUES.bottomColor,
            },
          ]}
        />
      )}
    </View>
  );
}
