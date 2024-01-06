import {create} from 'zustand';
import {AuthStoreType} from './types/auth-type';

export const useAuthStore = create<AuthStoreType>(set => ({
  isAuthed: false,
  updateAuthStore: (isAuthed: boolean) => set({isAuthed: !isAuthed}),
}));
