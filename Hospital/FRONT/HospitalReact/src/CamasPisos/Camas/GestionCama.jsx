import React from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


Modal.setAppElement("#root");

export function GestionCamas({ AbrirModal, cerrarModal }) {
    const camas = [
        { id: 1, nombre: "CAMA-01", piso: "P1" },
        { id: 2, nombre: "CAMA-02", piso: "P1" },
        { id: 3, nombre: "CAMA-03", piso: "P1" },
    ];

    return (
        <Modal
            isOpen={AbrirModal}
            onRequestClose={cerrarModal}
            style={customStyles}
            contentLabel="Gestión de Camas"
        >
            <h2 className="text-center">Gestión de Camas</h2>
            <button
                className="btn btn-success d-flex align-items-center justify-content-center"
                style={{ width: "120px", height: "40px", fontSize: "15px", margin: "20px", padding: "25px" }}>
                Agregar Camas
            </button>

            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th>Camas</th>
                        <th>Piso</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {camas.map((cama) => (
                        <tr key={cama.id}>
                            <td>{cama.nombre}</td>
                            <td>{cama.piso}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => alert(`Eliminar ${cama.nombre}`)}
                                >
                                    <i className="bi bi-trash m-2"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Modal>
    );
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '30vw',
        maxWidth: '90vw',  // Ajusta el ancho máximo al 90% de la ventana
        maxHeight: '90vh', // Ajusta la altura máxima al 90% de la ventana
        padding: '30px',
        overflow: 'auto',  // Permite scroll si el contenido es muy grande
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
};