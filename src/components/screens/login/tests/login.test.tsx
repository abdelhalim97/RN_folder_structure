import TestRenderer from 'react-test-renderer';
import Login from '../login';

test('test login component', () => {
  const loginSnapShot = TestRenderer.create(<Login />).toJSON();
  expect(loginSnapShot).toMatchSnapshot();
});
