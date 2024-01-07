import {QueryCache, QueryClient} from '@tanstack/react-query';

export const globalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, /////////////
      //No matter component mounts or unmounts, queries wont refetch until staleTime is over
      staleTime: 60000, //when stale time is over data wont refetched automatically but marked as stale
    },
  },
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      if (query.state.data !== undefined) {
        // 🎉 only show error toasts if we already have data in the cache
        // which indicates a failed background update
        console.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
});
