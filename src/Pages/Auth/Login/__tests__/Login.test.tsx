import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Login} from '..';

describe('<Login />', () => {
  test('renders login component elements correctly', () => {
    const {container} = render(
      <Router>
        <Login />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
