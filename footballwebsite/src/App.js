import Button from './components/button';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Button />,
  },
  {
    path: "/table",
    element: <div>back</div>,
  },
]);

function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
