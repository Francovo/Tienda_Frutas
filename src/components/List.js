import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../helpers/url";
import {} from "react-bootstrap"

const List = () => {
  useEffect(() => {
    getData();
  }, []);

  const [frutas, setFrutas] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setFrutas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dataDelete = (id) => {
    axios
      .delete(url + id)
      .then((response) => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Imagen</th>
          </tr>
        </thead>

        <tbody>
          {frutas.map((fruta) => (
            <tr key={fruta.id}>
              <td>{fruta.nombre}</td>
              <td>{fruta.precio}</td>
              <td>{fruta.descripcion}</td>
              <td>{fruta.imagen}</td>
              <td>
                <button onClick={() => dataDelete(fruta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
