import Login from '../login';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {Home} from '../..';
import 'react-test-renderer';

//describe breaks your test suite into components(using it keyword)
describe('test login component', () => {
  it('test login button', async () => {
    render(<Login />);
    const button = screen.getByRole('button', {name: /login/i});
    fireEvent.press(button);
    // Avoid mocking React Navigation. Instead, use a real navigator in your tests.
    // Don't check for navigation actions. Instead, check for the result of the navigation such as the screen being rendered.

    //waitFor is intended for async operations and DOM changes
    //but find* queries use waitFor under the hood already
    const homeView = render(<Home />);

    expect(
      await homeView.findByRole('text', {name: /home/i}),
    ).toBeOnTheScreen();
  });
});
