import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import MainLayout    from './layouts/MainLayout';
import HomePage      from './pages/HomePage';
import RecipesPage   from './pages/RecipesPage';
import RecipePage    from './pages/RecipePage';
import NotFoundPage  from './pages/NotFoundPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="recipes" element={<RecipesPage />} />
      <Route path="recipes/:id" element={<RecipePage />} />
      <Route path='wishlist' element={<WishlistPage />} />
      <Route path='search' element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
