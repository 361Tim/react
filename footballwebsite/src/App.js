import Button from './components/atoms/button';
import './App.css';
import Table from './components/sites/table';
import Players from './components/sites/scorers';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <div className='Tablebuttons'>
          <span className="Bundesligabutton"><Button to="/table" name="Bundesliga" /> </span>
          <span className="Tablebutton"> <Button to="/table" name="Tabelle" /></span>
        </div>,
        <div className="Torschützen" > <Button to="/torschützen" name="Torschützen" /> </div >
      </div >
  },
  {
    path: "/table",
    element: <div> <Table />

    </div>,
  },
  {
    path: "/torschützen",
    element:
      <div> <Players />
      </div>,

  }
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
