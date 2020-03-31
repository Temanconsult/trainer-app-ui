import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '..';

test('renders learn react link', () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/We are getting started soon!!!/i);
  expect(linkElement).toBeInTheDocument();
});
