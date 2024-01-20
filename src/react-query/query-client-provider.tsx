import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';

//this the react query wrapper
const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const ReactQueryWrapper = ({children}: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
export default ReactQueryWrapper;
