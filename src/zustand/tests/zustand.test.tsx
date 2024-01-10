import {renderHook} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {AuthStoreType} from '../types/auth-type';
import {create} from '../../../__mocks__/zustand';

const initialIsAuthValue = false;
const useIncrementingStore = create<AuthStoreType>()(set => ({
  isAuthed: initialIsAuthValue,
  updateAuthStore: () => set(state => ({isAuthed: !state.isAuthed})),
}));

describe('test login', () => {
  it('since we dont an actual auth initial value should be false', () => {
    const {result} = renderHook(() => useIncrementingStore());
    expect(result.current.isAuthed).toEqual(initialIsAuthValue);
  });

  it('first time updateAuthStore is called, value changes to false', () => {
    const {result} = renderHook(() => useIncrementingStore());
    expect(result.current.isAuthed).toEqual(initialIsAuthValue);

    act(() => result.current.updateAuthStore());
    expect(result.current.isAuthed).toEqual(true);
  });

  // it('second time updateAuthStore is called, value changes to false', () => {
  //   const {result} = renderHook(() => useIncrementingStore());
  //   expect(result.current.isAuthed).toEqual(true);

  //   act(() => result.current.updateAuthStore());
  //   expect(result.current.isAuthed).toEqual(false);
  // });
});
