import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../CamasPisosCSS/camas.css";
import camilla from "../assets/camilla.jpg";
import { GestionPisos } from "../Pisos/GestionarPisos";  

export const Camas = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const openModal = () => {
    setModalIsOpen(true);  //  abrir el modal
  };

  const closeModal = () => {
    setModalIsOpen(false);  //  cerrar el modal
  };

  return (
    <>
      <div className="contenedor">
        <div className="side">
          <h1 style={{ color: "#ffffff" }}>Aqui va el side</h1>
        </div>

        <div className="cont">
          <div className="titulo">
            <p className="h2 fw-semibold">Gestión de pisos y camas</p>
          </div>

          <div className="cont-btns">
            <div className="piso">
              <select className="form-select" aria-label="Default select example">
                <option selected>Seleccionar piso</option>
                <option value="1">Piso 1</option>
                <option value="2">Piso 2</option>
                <option value="3">Piso 3</option>
              </select>
            </div>
            <div className="g-cama-piso">
              <button type="button" className="btn fw-normal">
                Gestionar camas
              </button>
              <button type="button" className="btn fw-normal" onClick={openModal}>  
                Gestionar pisos
              </button>
            </div>
          </div>

          <div className="contenido-principal">
            <div className="cama">
              <img src={camilla} alt="camilla" />
              <p className="fw-bolder">Cama-01</p>
              <p className="fw-semibold">Paciente: Fulanito perez perez</p>
              <p className="fw-semibold">Enf: Fulanita perez perez</p>
            </div>
          </div>

          {/* Pasa el estado y la función para cerrar el modal a GestionPisos */}
          {modalIsOpen && <GestionPisos AbrirModal={modalIsOpen} cerrarModal={closeModal} />}
        </div>
      </div>
    </>
  );
};
