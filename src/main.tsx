import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from '@pages/MainPage';
import { ErrorBoundary } from '@components/ErrorBoundary';
import './index.css';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from '@pages/ErrorPage';
import { DetailPage } from '@pages/DetailPage';
import { BASE_URL, SEARCH_KEY } from './constants';
import { getUrlFromParams } from '@components/PlanetsList/getUrlFromParams';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const searchOptions = getUrlFromParams(url.searchParams)
      const res = await fetch(BASE_URL + searchOptions);

      const planets = (await res.json()).results
      return { planets, searchValue: url.searchParams.get(SEARCH_KEY) }
    },
    action: async ({ request }) => {
      const formData = await request.formData();
      const params = Object.fromEntries(formData);

      return redirect(`?search=${params.search}`);
    },
    children: [
      {
        path: 'detail',
        element: <DetailPage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `${BASE_URL}?search=${params.name}`
          );
          return res.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
