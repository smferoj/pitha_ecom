import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProjduct from './pages/NewProjduct';
import Signup from './pages/Signup';
import { Provider } from 'react-redux';
import { store } from './redux/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path="menu" element={<Menu/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="newproduct" element={<NewProjduct/>}/>
 
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>
);

