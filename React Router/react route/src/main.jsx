import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/postDetail/PostDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [

      {index: true, Component: Home } ,
      {path: 'laptops', Component: Laptops},
      {path: 'mobile', Component: Mobile},

      {path: 'user', 
      loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      Component: Users},

      {

    path:'user/:userId',

    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    Component: UserDetails
  },
    

    {
      path: 'posts',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      Component: Posts
    },
    {
      path: 'posts/:postId',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component: PostDetail
    }
    ]
  },

  {
    path: 'about',
    element: <p>hello about</p>
  },
  {
    path: 'app',
    Component: App
  },

  {path: '*',
   element: <h3>not found : 404 status</h3>
  }

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
