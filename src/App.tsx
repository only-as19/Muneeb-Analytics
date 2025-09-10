import { createBrowserRouter,RouterProvider } from "react-router"
import routes from "./routes/routes"

function App() {
  const route = createBrowserRouter(routes)
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App
