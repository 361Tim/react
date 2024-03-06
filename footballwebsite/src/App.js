import Button from './components/atoms/tablebutton';
import Back from './components/atoms/backbutton';
import Scorebutton from './components/atoms/scorebutton';
import Table from './components/sites/table';
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
    path: "/",
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
