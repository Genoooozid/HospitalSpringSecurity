import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap
import "../CamasPisosCSS/camas.css";
import camilla from "../assets/camilla.jpg";
export const Camas = () => {
  return (
    <>
      <div className="contenedor">
        <div className="side">
          <h1 style={{ color: "#ffffff" }}>Aqui va el side</h1>
        </div>

        <div className="cont">
          <div className="titulo">
            <p class="h2 fw-semibold">Gestión de pisos y camas</p>
          </div>

          <div className="cont-btns">
            <div className="piso">
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccionar piso</option>
                <option value="1">Piso 1</option>
                <option value="2">Piso 2</option>
                <option value="3">Piso 3</option>
              </select>
            </div>
            <div className="g-cama-piso">
              <button type="button" class="btn fw-normal">
                Gestionar camas
              </button>
              <button type="button" class="btn fw-normal">
                Gestionar pisos
              </button>
            </div>
          </div>

          <div className="contenido-principal">

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>





            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>

            <div className="cama">
                <img src={camilla} alt="camilla" />
                <p class="fw-bolder">Cama-01</p>
                <p class="fw-semibold">Paciente: Fulanito perez perez</p>
                <p class="fw-semibold">Enf: Fulanita perez perez</p>

            </div>
            

          </div>

          
        </div>
      </div>
    </>
  );
};
