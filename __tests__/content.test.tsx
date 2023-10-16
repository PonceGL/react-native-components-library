import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {render} from '@testing-library/react-native';

import {Content} from '../src';
import {DEFAULT_VALUES} from '../src/components/organisms/content/defaultValues';

describe('Content component', () => {
  const screenName = 'Pantalla de test';
  const textContent = 'this is the content';

  const element = ({
    name,
    fullScreen = false,
  }: {
    name?: string;
    fullScreen?: boolean;
  }) => {
    const component = render(
      <Content
        screenName={name}
        fullScreen={fullScreen}
        topColor={Colors.white}>
        <View>
          <Text>{textContent}</Text>
        </View>
      </Content>,
    );
    return {component};
  };

  test('Should render correctly', () => {
    const {component} = element({});
    expect(component).toBeDefined();
  });

  test('Test ID should correspond to SafeArea', () => {
    const {component} = element({
      name: screenName,
    });
    component.getByTestId(`SafeArea-${screenName}`);
  });

  test('Test ID should correspond to FullScreen', () => {
    const {component} = element({
      name: screenName,
      fullScreen: true,
    });
    component.getByTestId(`FullScreen-${screenName}`);
  });

  test('Test ID should correspond to SafeArea DEFAULT_VALUES', () => {
    const {component} = element({});
    component.getByTestId(`SafeArea-${DEFAULT_VALUES.screenName}`);
  });

  test('Test ID should correspond to FullScreen DEFAULT_VALUES', () => {
    const {component} = element({
      fullScreen: true,
    });
    component.getByTestId(`FullScreen-${DEFAULT_VALUES.screenName}`);
  });

  test('It should display the content correctly', () => {
    const {component} = element({
      fullScreen: true,
    });
    component.getByText(textContent);
  });
});
