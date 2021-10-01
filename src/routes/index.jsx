import { Switch, Route } from "react-router";
import Cart from "../pages/cart";
import Products from "../pages/products";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Products></Products>
            </Route>
            <Route path='/cart' exact>
                <Cart></Cart>
            </Route>
        </Switch>
    )
}

export default Routes;