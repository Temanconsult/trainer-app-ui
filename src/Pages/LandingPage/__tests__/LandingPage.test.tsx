import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Route} from 'react-router-dom';
import {LandingPage} from '..';

describe('<LandingPage />', () => {
  test('it should match with previous snapshot', () => {
    const {container} = render(
      <Route>
        <LandingPage />
      </Route>
    );
    expect(container).toMatchSnapshot();
  });
});
