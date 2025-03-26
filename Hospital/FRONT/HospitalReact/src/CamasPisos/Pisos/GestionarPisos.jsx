import React from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // Importar íconos de Bootstrap

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
    height: "400px",
    maxWidth: "90%",
    maxHeight: "90%",
    padding: "20px",
    overflow: "auto",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative", // Para posicionar el botón de cerrar
  },
};

Modal.setAppElement("#root"); // No quitar esto

export function GestionPisos({ AbrirModal, cerrarModal }) {
  const pisos = [
    { id: 1, nombre: "Piso 101" },
    { id: 2, nombre: "Piso 102" },
    { id: 3, nombre: "Piso 103" },
    { id: 4, nombre: "Piso 104" },
  ];

  return (
    <Modal
      isOpen={AbrirModal}
      onRequestClose={cerrarModal}
      style={customStyles}
      contentLabel="Gestión de pisos"
    >
      <button
        type="button"
        className="btn-close"
        onClick={cerrarModal}
        aria-label="Close"
        style={{ position: "absolute", right: "15px", top: "15px" }}
      ></button>

      <h2>Gestión de pisos</h2>

      <button
        className="btn btn-success mb-3"
        style={{ width: "120px", height: "30px", fontSize: "12px" }}
      >
        Agregar piso
      </button>

      <div className="d-flex justify-content-center">
        <table className="table text-center" style={{ width: "80%", margin: "auto" }}>
          <thead>
            <tr>
              <th scope="col">Piso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pisos.map((piso) => (
              <tr key={piso.id}>
                <td scope="col">{piso.nombre}</td>
                <td scope="col">
                  <button className="btn btn-danger btn-sm" onClick={() => alert(`Eliminar ${piso.nombre}`)}>
                    Eliminar
                    <i className="bi bi-trash m-2"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
