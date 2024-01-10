import {act} from 'react-test-renderer'; //import {act} from '@testing-library/react';
import {StateCreator, create as actualCreate} from 'zustand';

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set<() => void>();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create =
  () =>
  <S>(createState: StateCreator<S>) => {
    const store = actualCreate(createState);
    const initialState = store.getState();
    storeResetFns.add(() => store.setState(initialState, true));
    return store;
  };

// Reset all stores after each test run
afterEach(() => {
  act(() => storeResetFns.forEach((resetFn: any) => resetFn()));
});

export {create};
