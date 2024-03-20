import Button from './components/atoms/button';
import './App.css';
import Table from './components/sites/table';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <div className="Tablebutton"> <Button to="/table" name="Tabelle" /></div>,
        <div className="Torschützen" > <Button to="/scorers" name="Torschützen" /> </div >
      </div >
  },
  {
    path: "/table",
    element: <div> <Table />

    </div>,
  },
  {
    path: "/scorers",
    element: <Button to="/" name="<-back" />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
