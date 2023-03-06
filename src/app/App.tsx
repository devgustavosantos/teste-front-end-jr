import './styles.scss';

import { QueryClientProvider } from 'react-query';

import { ProductModalProvider } from '../contexts/ProductModal';
import { Home } from '../pages/Home';
import { queryClient } from '../services/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductModalProvider>
        <Home />
      </ProductModalProvider>
    </QueryClientProvider>
  );
}
