import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import ErrorPage from "./Components/Errorpage/ErrorPage";

import DashBoard from "./Components/DashBoard/DashBoard";
import Home from "./Components/Home/Home";
import BookDetail from "./Components/BookDetail/BookDetail";
import ListedBooks from "./Components/ListedBooks.jsx/ListedBooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesRead from "./Components/PagesRead/PagesRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("booksData.json"),
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("booksData.json"),
      },
      {
        path: "pagesRead",
        element: <PagesRead></PagesRead> ,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
