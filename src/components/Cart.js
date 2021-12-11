import React from "react";

const Cart = ({ detalle }) => {
  const traerLocal = JSON.parse(localStorage.getItem("getItem"));
  const [id] = traerLocal;
  console.log(id.id);
  console.log(detalle);
  const resultado = detalle.find((producto) => producto.id === id.id);
  console.log(resultado);
  return <div></div>;
};

export default Cart;