import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

//components
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Routes/LandingPage";
import MakeAccount from "./Routes/MakeAccount";

import Dashboard from "./Routes/Dashboard";
import ErrorPage from "./Routes/ErrorPage";
import UpdateProfile from "./Routes/UpdateProfile";

//catalog
import Catalog from "./Routes/CatalogRelated/Catalog";
import Cart from "./Routes/CatalogRelated/Cart";
import CatalogProduct from "./Routes/CatalogRelated/CatalogProduct";
import PostCatalogItem from "./Routes/CatalogRelated/PostCatalogItem";

//hooks
import useAuth from "./Hooks/useAuth";
import Footer from "./Components/Footer/Footer";
import Complition from "./Routes/CatalogRelated/Complition";


const cartItemFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const App = () => {
  const [user] = useAuth();

  const [cart, setCart] = useState(cartItemFromLocalStorage);
  const [coutner, setCounter] = useState(cart.length);

  useEffect(() => {
    setCounter(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartTotalAmount = cart.reduce(
    (acc, data) => acc + data.price * data.quantity,
    0,
  );

  return (
    <div className="app-container">
      <Navbar user={user} coutner={coutner} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<MakeAccount user={user} />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              user={user}
              coutner={coutner}
              setCounter={setCounter}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              user={user}
              cart={cart}
              setCart={setCart}
              cartTotalAmount={cartTotalAmount}
            />
          }
        />
        <Route
          path="/catalog/:productId"
          element={<CatalogProduct cart={cart} setCart={setCart} />}
        />

        {user ? (
          <Route
            path="/dashboard/:userId"
            element={<Dashboard user={user} />}
          />
        ) : (
          <Route path="/register" element={<MakeAccount />} />
        )}
        {user ? (
          <Route path="/edit/:userId" element={<UpdateProfile user={user} />} />
        ) : (
          <Route path="/register" element={<MakeAccount />} />
        )}

        {user && user.isAdmin ? (
          <Route
            path="/dashboard/catalog-item"
            element={<PostCatalogItem user={user} />}
          />
        ) : (
          <Route path="/dashboard/catalog-item" element={<ErrorPage />} />
        )}

        {
          <Route
            path="/complition"
            element={<Complition setCart={setCart} />}
          />
        }

        <Route path="*" element={<ErrorPage user={user} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
