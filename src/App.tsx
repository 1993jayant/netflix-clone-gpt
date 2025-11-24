import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home"
import Layout from "./components/Layout"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
