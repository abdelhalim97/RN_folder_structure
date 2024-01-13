import Login from '../login';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Home} from '../..';
import 'react-test-renderer';

//describe breaks your test suite into components(using it keyword)
describe('test login component', () => {
  it('test login button', async () => {
    const test = render(<Login />);
    const button = test.getByRole('button', {name: /login/i});
    fireEvent.press(button);
    // Avoid mocking React Navigation. Instead, use a real navigator in your tests.
    // Don't check for navigation actions. Instead, check for the result of the navigation such as the screen being rendered.
    const home = render(<Home />);

    // const homeScreen = ;
    //waitFor is intended for async operations and DOM changes
    await waitFor(() =>
      expect(home.getByRole('text', {name: /home/})).toBeOnTheScreen(),
    );
  });
});
