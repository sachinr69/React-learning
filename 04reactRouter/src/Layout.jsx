import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from "./components/footer/footer";

function Layout(){
    return(
        <>
        <Header></Header>
        <Outlet />
       <Footer></Footer>
        </>
    )
}

export default Layout