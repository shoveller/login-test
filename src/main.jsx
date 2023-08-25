import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import TestLayout from "./TestLayout";
import Login from "./Login.jsx";

const Auth = ({ children }) => {
    const 로그인함 = localStorage.getItem('로그인했냐')

    if (!로그인함) {
        return <Navigate to="/login"/>
    }

    return children
}

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Auth><TestLayout/></Auth>}>
        <Route index element={<App/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
