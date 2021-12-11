import styles from "../styles/Form.module.css";
import React, { useState } from "react";
import { fileUpload } from "../helpers/fileUpload";
import axios from "axios";
import { url } from "../helpers/url";



const Form = () => {

    const [frutas, setFrutas] = useState({
        nombre: '',
        madurez: '',
        precio: '',
        descripcion: '',
        imagen: ''
    })

    const [error, actualizarError] = useState(false)
    
    const { nombre, madurez, precio, descripcion, imagen} = frutas


    const handleChange = ({ target }) => {
        setFrutas({
            ...frutas,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                frutas.imagen = response
            }).catch(error => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post(url, frutas)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
    <div >
      <br/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
        <div className={styles.h1_frutas}>
         <h1 >
          Ingrese la fruta
        </h1></div> 
          <div className={styles.div_Form}>
            <input className={styles.input} name="nombre" placeholder="Nombre" value={nombre} onChange={handleChange} required/>
          </div>
          <div className={styles.div_Form}>
            <input className={styles.input} name="madurez"  placeholder="Madurez" value={madurez} onChange={handleChange} required/>
          </div>
          <div className={styles.div_Form}>
            <input className={styles.input} name="precio" type="number" placeholder="Precio" value={precio} onChange={handleChange} required/>
          </div>
          <div className={styles.div_Form}>
            <input className={styles.input} name="descripcion" placeholder="Descripcion" value={descripcion} onChange={handleChange} required/>
          </div>
          <div className={styles.btn_archivo}>
            <input className={styles.input_archivo} name="imagen" type="file" placeholder="imagen" value={imagen}  onChange={handleFile}/>
          </div>
          <div className={styles.btn_submit}>
            <button className={styles.btn} name="btn_submit" onClick={postData}> Enviar </button>
          </div>
        </div>
        {error ? (
                <h4 className="alerta-error">Todos los campos son obligatorios</h4>
            ) : null}
      </form>
    </div>
  );
};

export default Form;
