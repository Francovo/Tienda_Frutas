import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Details.module.css";

const Details = ({ detalle }) => {
  const { id } = useParams();
  const buscado = detalle.find((producto) => producto.id === Number(id));
  const { nombre, descripcion, imagen, precio } = buscado;

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
    <div className={styles.detailsContainer} onClick={handleChange}>
      <img className={`${styles.col} ${styles.Image}`} src={imagen} alt={nombre} />
      <div className={`${styles.col} ${styles.productDetails}`}>
        <p className={styles.firstItem}>
          <strong> {nombre}</strong>
          <br />
          <strong> {precio}</strong>
        </p>
        <p className={styles.parrafo}>{descripcion}</p>

        <div>
          <button className={`botonAgregar ${styles.boton}`} id={id}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;