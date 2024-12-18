import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Pages/Main/Main.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import AddBook from './components/Pages/AddBook/AddBook.jsx';
import AllBooks from './components/Pages/AllBooks/AllBooks.jsx';
import BookDetails from './components/Pages/BookDetails/BookDetails.jsx';
import BorrowedBooks from './components/Pages/BorrowedBooks/BorrowedBooks.jsx';
import ErrorPage from './components/Pages/Errorpage/ErrorPage.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element:    <Main></Main> ,
    errorElement: <ErrorPage></ErrorPage>,
    // loader: () => fetch('http://localhost:5000/book')
  },
  {
    path: "/login",
    element: <Login></Login> ,
  },
  {
   path: "/register",
   element: <Register></Register>,
  },
  {
    path: "/addBook",
    element:  <AddBook></AddBook>,
   },
   {
    path: "/allBooks",
    element:  <AllBooks></AllBooks>,
   },
   {
    path: "/bookDetails",
    element:  <BookDetails></BookDetails>,
   },
   {
    path: "/borrowedBooks",
    element: <BorrowedBooks></BorrowedBooks>,
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
