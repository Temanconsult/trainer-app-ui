import React from 'react';
import {render} from '@testing-library/react';
import {LandingPage} from '..';

const props = {
  isLoading: false,
  message: '',
  error: '',
  reduxRequest: jest.fn(),
};

describe('<LandingPage />', () => {
  test('renders learn react link', () => {
    const {getByText} = render(<LandingPage {...props} />);
    const linkElement = getByText(/We are getting started soon!!!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
