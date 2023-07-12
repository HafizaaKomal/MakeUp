import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Basket, Error, Search, ViewProductSingle, ViewTypeProductList, ViewProductAll, CategoryProductListPage, WishListPage , Login , SignUp} from "../views/index"
import { route } from "../constants/index";
import BaseLayout from '../layouts/BaseLayout';



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = { route.HOME } element = { <BaseLayout />}>
                <Route path = { route.HOME } element = { <Home />  } />
                <Route path = { route.BASKET } element = { <Basket />  } />
                <Route path = { route.Login } element = { <Login />} />
                <Route path = { route.SignUp} element = { <SignUp />} />
                <Route path = { route.PAGE_NOT_FOUND } element = { <Error /> } />
                <Route path = { route.SEARCH_PRODUCT } element = { <Search />} />
                <Route path = { route.ALL_PRODUCT } element = { <ViewProductAll /> } />
                <Route path = { route.TYPE + "/:product_type" } element = { <ViewTypeProductList />} />
                <Route path = { route.SINGLE_PRODUCT + "/:id"} element = { <ViewProductSingle /> } />
                <Route path = "*" element = { <Error />} />
                <Route path = {route.WISHLIST } element = { <WishListPage /> } />
                <Route path = { route.CATEGORY + "/:category" } element = { <CategoryProductListPage />} />
            </Route>      
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
