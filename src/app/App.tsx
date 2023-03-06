import './styles.scss';

import { QueryClientProvider } from 'react-query';

import { Home } from '../pages/Home';
import { queryClient } from '../services/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
