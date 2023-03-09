import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Register, Login, NewPost } from "./components";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<AllPosts />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="new-post" element={<NewPost />} />
    </Route>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
