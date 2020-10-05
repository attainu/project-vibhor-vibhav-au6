import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";
import Home from "./components/core/Home";
import PrivateRoute from "./components/auth/PrivateRoute";
import Dashboard from "./components/user/UserDashboard";
import AdminRoute from "./components/auth/AdminRoute";
import AdminDashboard from "./components/user/AdminDashboard";
import AddCategory from "./components/admin/AddCategory";
import AddProduct from "./components/admin/AddProduct";
import Shop from "./components/core/Shop";
import Product from "./components/core/Product";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
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
                <Route path="/product/:productId" exact component={Product} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
