import React from 'react';
import {Text} from 'react-native';
import {ColorValue} from 'react-native/types';
import {render} from '@testing-library/react-native';

import {FullScreen} from '../../src/components/molecules/fullScreen';
import {
  DEFAULT_VALUES,
  testIDFullScreen,
} from '../../src/components/organisms/content/defaultValues';
import {findPropertyIndex} from '../../src/utils';

interface ElementProps {
  name?: string;
  bg?: ColorValue;
}

describe('FullScreen', () => {
  const defaultTestId = `${testIDFullScreen}-${DEFAULT_VALUES.screenName}`;
  const message = 'Test content';
  const element = ({name, bg}: ElementProps) => {
    const component = render(
      <FullScreen screenName={name} backgroundColor={bg}>
        <Text>{message}</Text>
      </FullScreen>,
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
    const screenName = 'test';
    const {component} = element({
      name: screenName,
    });
    expect(
      component.getByTestId(`${testIDFullScreen}-${screenName}`),
    ).toBeDefined();
  });

  test('default background color', () => {
    const screenName = 'defaultBackgroundTest';
    const {component} = element({
      name: screenName,
    });

    const fullScreen = component.getByTestId(
      `${testIDFullScreen}-${screenName}`,
    );
    const indexBG = findPropertyIndex(
      fullScreen.props.style,
      'backgroundColor',
    );

    expect(fullScreen.props.style[indexBG].backgroundColor).toEqual(
      DEFAULT_VALUES.backgroundColor,
    );
  });

  test('custom background color', () => {
    const screenName = 'backgroundTest';
    const colorRed = '#ff00ff';
    const {component} = element({
      name: screenName,
      bg: colorRed,
    });

    const fullScreen = component.getByTestId(
      `${testIDFullScreen}-${screenName}`,
    );
    const indexBG = findPropertyIndex(
      fullScreen.props.style,
      'backgroundColor',
    );
    expect(fullScreen.props.style[indexBG].backgroundColor).toEqual(colorRed);
  });
});
