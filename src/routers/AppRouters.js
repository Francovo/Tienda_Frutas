import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Form from "../components/Form";
import List from "../components/List";
import Details from "../components/Details";
import Cart from "../components/Cart";
import { url } from "../helpers/url";

const AppRouters = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registro" element={<Form />} />
          <Route path="/modiproductos" element={<List productos={productos}/>} />
          <Route path="/detalles/:id" element={<Details detalle={productos} />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouters;
