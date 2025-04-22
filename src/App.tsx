import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { WishlistProvider } from './context/WishlistContext';

export function App() {
  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
}

export default App;