import React from "react";
import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ producto }) => {
  const idProducto = producto.id;
  const guardarLs = [];

  const handleChange = ({ target }) => {
    const boton = target.classList.contains("botonAgregar");
    let traerLocal = JSON.parse(localStorage.getItem("getItem"));
    if (boton === true) {
      let contador = 0;
      if (traerLocal === null) {
        contador = 1;
        guardarLs.push({ id: target.id, cantidad: contador });
      } else {
        // eslint-disable-next-line array-callback-return
        traerLocal.map((producto) => {
          if (producto.id === target.id) {
            contador += 1;
          } else {
            contador = 1;
            guardarLs.push({ id: target.id, cantidad: contador });
          }
        });
      }
      localStorage.setItem("getItem", JSON.stringify(guardarLs));
    }
    console.log(guardarLs);
  };

  return (
    <div className={styles.card} onClick={handleChange}>
      <div>
        <Link to={"/detalles/" + idProducto}>
          <img className={styles.productoImagen} src={producto.imagen} alt={producto.nombre} />
        </Link>
      </div>
      <div className={styles.productPrice}>${producto.precio}</div>
      <div>
        <h3 className={styles.productName}>{producto.nombre}</h3>
      </div>

      <div>
        <button className={`botonAgregar ${styles.boton}`} id={idProducto}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Card;