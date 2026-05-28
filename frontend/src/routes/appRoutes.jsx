import AddArticle from "../pages/addArticle/addArticle.jsx";
import ArticleDetails from "../pages/articleDetails/articleDetails.jsx";
import EditDetails from "../pages/editDetails/editDetails.jsx";
import Home from "../pages/home/home.jsx";
import Login from "../pages/login/login.jsx";
import Welcome from "../pages/welcome/welcome.jsx";

import {Routes, Route} from 'react-router-dom'

export default function AppRoutes(){

    return(

    <Routes>
            
            <Route path="/"
            element={<Welcome />}
            />

            <Route path="/login"
            element={<Login />}
            />

            <Route path="/home"
            element={<Home />}
            />

            <Route path="/editDetails/:id"
            element={<EditDetails />}
            />

            <Route path="/articleDetails"
            element={<ArticleDetails />}
            />

            <Route path="/addArticle"
            element={<AddArticle />}
            />

        </Routes>
    )
}
