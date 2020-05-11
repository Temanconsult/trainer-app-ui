import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Signup from '..';

describe('<Signup />', () => {
  test('renders signup component elements correctly', () => {
    const {container} = render(
      <Router>
        <Signup />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
