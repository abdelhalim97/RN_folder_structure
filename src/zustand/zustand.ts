import {create} from 'zustand';
import {AuthStoreType} from './types/auth-type';

export const useAuthStore = create<AuthStoreType>(set => ({
  isAuthed: false,
  updateAuthStore: () => set(state => ({isAuthed: !state.isAuthed})),
  //}
}));

// export const useCatsStore = create<AuthStoreType>(set => ({
//   isAuthed: false,
//   updateAuthStore: () => set(state => ({isAuthed: !state.isAuthed})),
//   //   apiCall:async()=> {const response=await new Promise((resolve)=>APICall)
//   //set(state)=>({response:state.response})
//   //}
// }));
