import { createBrowserRouter,RouterProvider } from "react-router"
import routes from "./routes/routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const route = createBrowserRouter(routes)
  return (
    <div>
      <RouterProvider router={route} />
      <ToastContainer position="bottom-right"/>
    </div>
  )
}

export default App
