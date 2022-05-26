import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Component } from '../index';

describe('<Component />', () => {
  it('render Component with dumi', () => {
    render(<Component />);
    expect(screen.queryByText('Add')).toBeInTheDocument();
  });
});
