import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {ClassicButton} from '.';

describe('ClassicButton test', () => {
  let component: RenderAPI;

  beforeEach(() => {
    component = render(<ClassicButton />);
  });

  test('Should render correctly', () => {
    expect(component).toBeDefined();
  });
});
