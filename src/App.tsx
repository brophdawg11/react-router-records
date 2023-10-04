import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import {
  Component as HomeComponent,
  loader as homeLoader,
} from "./routes/Home";
import {
  Component as AlbumComponent,
  loader as albumLoader,
} from "./routes/Album";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: HomeComponent,
      },
      {
        path: "album/:id",
        loader: albumLoader,
        Component: AlbumComponent,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
