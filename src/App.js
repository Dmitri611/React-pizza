import React from "react";
import { Routes, Route } from "react-router-dom";
import OrdersHistory from "pages/orders-history/ordersHistory";
import Page404 from "pages/page404/page404";
import { useSelector } from "react-redux";
import { authSelector } from "store/selectors/selectors";
import Layout from "./components/layout";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Admin from "./pages/admin/admin";
import Products from "./pages/products/products";
import Users from "./pages/users/users";
import PromoCodes from "./pages/promo-codes/promoCodes";
import Orders from "./pages/orders/orders";
import Basket from "./pages/basket/basket";
import BasketEmpty from "./pages/basket/components/basketEmpty/basketEmpty";
import Payment from "./pages/payment/payment";

const App = () => {
  const { isAdmin, isAuth } = useSelector(authSelector);

  return (
    <Layout>
      {isAuth ? (
        isAdmin ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/promo-codes" element={<PromoCodes />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/profile/orders-history" element={<OrdersHistory />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/basket-empty" element={<BasketEmpty />} />
            <Route path="/basket/payment" element={<Payment />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/orders-history" element={<OrdersHistory />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/basket-empty" element={<BasketEmpty />} />
            <Route path="/basket/payment" element={<Payment />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
    </Layout>
  );
};

export default App;
