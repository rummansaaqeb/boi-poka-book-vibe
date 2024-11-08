import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json') // do not load all the books for 1 book
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        // not the recommended way to load data
        loader: () => fetch('/booksData.json') // do not load all the books for 1 book aka data
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
