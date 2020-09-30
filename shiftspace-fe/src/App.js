import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

import PrivateRoute from "./components/auth/PrivateRoute"
import Dashboard from "./components/user/UserDashboard"
import AdminRoute from "./components/auth/AdminRoute"
import AdminDashboard from "./components/user/AdminDashboard"
import AddCategory from "./components/admin/AddCategory";
import AddProduct from "./components/admin/AddProduct";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                path="/user/dashboard"
                exact
                component={Dashboard} />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;