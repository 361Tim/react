import Button from '../atoms/tablebutton';
import Scorebutton from '../atoms/scorebutton';
import Table from './table';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Button />,
    element: <Scorebutton />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
