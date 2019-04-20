import React from 'react'
import { Route } from "react-router-dom";
import Header from '../commen/components/Header/Header';
import Footer from '../commen/components/Footer/Footer';
import HomePage from '../Pages/HomePage/HomePage';
import PostPages from '../Pages/Post/PostPages';
import Store from '../Pages/StorePage/Store';
import AboutPage from '../Pages/About/AboutPage';

const ValidRoutes = () => {
  return (
    <div>
        <Header />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/About" component={AboutPage}/>
            <Route exact path="/PostPages" component={PostPages}/>
            <Route exact path="/Store" component={Store}/>
        <Footer />
    </div>
  )
}

export default ValidRoutes
