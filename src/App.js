import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Carts from "./components/Carts"
import NavSection from './components/NavSection';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/carts',
      element:<><NavSection/><Carts/></>

    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
