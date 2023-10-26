import React from 'react';
import {Text} from 'react-native';
import {ColorValue} from 'react-native/types';
import {render} from '@testing-library/react-native';

import {SafeArea} from '../../src/components/molecules/safeArea';
import {
  DEFAULT_VALUES,
  testIDSafeAreaScreen,
} from '../../src/components/organisms/content/defaultValues';
import {findPropertyIndex} from '../../src/utils';

interface ElementProps {
  name?: string;
  bg?: ColorValue;
}

describe('SafeArea', () => {
  const defaultTestId = `${testIDSafeAreaScreen}-${DEFAULT_VALUES.screenName}`;
  const message = 'Test SafeArea content';
  const element = ({name, bg}: ElementProps) => {
    const component = render(
      <SafeArea screenName={name} backgroundColor={bg}>
        <Text>{message}</Text>
      </SafeArea>,
    );
    return {component};
  };

  test('renders children', () => {
    const {component} = element({});
    expect(component.getByText(message)).toBeDefined();
  });

  test('renders with default values', () => {
    const {component} = element({});
    expect(component.getByTestId(defaultTestId)).toBeDefined();
  });

  test('renders with custom screenName', () => {
    const screenName = 'SafeAreaTest';
    const {component} = element({
      name: screenName,
    });
    expect(
      component.getByTestId(`${testIDSafeAreaScreen}-${screenName}`),
    ).toBeDefined();
  });

  test('default background color', () => {
    const screenName = 'defaultBackgroundTest';
    const {component} = element({
      name: screenName,
    });

    const safeAreaView = component.getByTestId(
      `${testIDSafeAreaScreen}-${screenName ?? DEFAULT_VALUES.screenName}-View`,
    );
    const indexBG = findPropertyIndex(
      safeAreaView.props.style,
      'backgroundColor',
    );

    expect(safeAreaView.props.style[indexBG].backgroundColor).toEqual(
      DEFAULT_VALUES.backgroundColor,
    );
  });

  test('custom background color', () => {
    const screenName = 'backgroundTest';
    const colorGreen = '#4ade80';
    const {component} = element({
      name: screenName,
      bg: colorGreen,
    });

    const safeAreaView = component.getByTestId(
      `${testIDSafeAreaScreen}-${screenName ?? DEFAULT_VALUES.screenName}-View`,
    );
    const indexBG = findPropertyIndex(
      safeAreaView.props.style,
      'backgroundColor',
    );
    expect(safeAreaView.props.style[indexBG].backgroundColor).toEqual(
      colorGreen,
    );
  });
});
