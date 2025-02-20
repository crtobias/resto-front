import { Main } from "@/layouts";
import { About, Home, NotFound } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
  // {
  //   index: true,
  //   element: <Welcome />,
  //   errorElement: <NotFound />,
  // },
  // {
  //   path: "/videogames",
  //   element: <HomeLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: ":id",
  //       element: <Single />
  //     },
  //     {
  //       path: "name",
  //       element: <Search />
  //     }
  //   ]
  // },
])
