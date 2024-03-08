import Button from './components/atoms/button';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <div className="Tabelle button"> <Button to="/table" name="Tabelle" /></div>,
        <div className="Torschützen" > <Button to="/scorers" name="Torschützen" /> </div >
      </div >
  },
  {
    path: "/table",
    element: <Button to="/" name="<-back" />,
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
