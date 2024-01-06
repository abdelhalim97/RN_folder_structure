import {QueryCache, QueryClient} from '@tanstack/react-query';

export const globalQueryClient = new QueryClient({
  //TODO: how to export this
  defaultOptions: {
    queries: {
      retry: 1, /////////////

      staleTime: 120000, //TODO: verify if this the cache time
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
