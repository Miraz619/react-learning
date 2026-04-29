import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
import WishList from "../Pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "/Details/:id",
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },
        Component: BookDetails,
      },

      {
        path: "/read",
        Component: ReadList,
        loader: async () => {
          const res = await fetch("/booksData.json");
          return res.json();
        },

        
      },


      {
          path: 'wish',
          loader: ()=> fetch('/booksData.json'),
          Component: WishList
        }
    ],
  },
]);
