import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CamasPisosCSS/camas.css";
import camilla from "../assets/camilla.jpg";
import { GestionPisos } from "../Pisos/GestionarPisos";
import { GestionCamas } from "./GestionCama";

export const Camas = () => {
  const [modalPisosIsOpen, setModalPisosIsOpen] = useState(false);
  const [modalCamasIsOpen, setModalCamasIsOpen] = useState(false);

  const openPisosModal = () => {
    setModalPisosIsOpen(true);
  };

  const closePisosModal = () => {
    setModalPisosIsOpen(false);
  };

  const openCamasModal = () => {
    setModalCamasIsOpen(true);
  };

  const closeCamasModal = () => {
    setModalCamasIsOpen(false);
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
              <button type="button" className="btn fw-normal" onClick={openCamasModal}>
                Gestionar camas
              </button>
              <button type="button" className="btn fw-normal" onClick={openPisosModal}>
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

          {/* Modales */}
          {modalPisosIsOpen && <GestionPisos AbrirModal={modalPisosIsOpen} cerrarModal={closePisosModal} />}
          {modalCamasIsOpen && <GestionCamas AbrirModal={modalCamasIsOpen} cerrarModal={closeCamasModal} />}
        </div>
      </div>
    </>
  );
};