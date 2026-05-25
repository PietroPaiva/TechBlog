import AddDetails from "../pages/addDetails";
import ArticleDetails from "../pages/articleDetails";
import EditDetails from "../pages/editDetails";
import Home from "../pages/home";
import Login from "../pages/login";
import Welcome from "../pages/welcome";

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

            <Route path="/editDetails"
            element={<EditDetails />}
            />

            <Route path="/articleDetails"
            element={<ArticleDetails />}
            />

            <Route path="/addDetails"
            element={<AddDetails />}
            />

        </Routes>
    )
}