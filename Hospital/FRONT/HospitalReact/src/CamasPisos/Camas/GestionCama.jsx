import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function GestionCamas({ AbrirModal, cerrarModal }) {
    const [camas, setCamas] = useState([
        { id: 1, nombre: "CAMA-01", piso: "P1" },
        { id: 2, nombre: "CAMA-02", piso: "P1" },
        { id: 3, nombre: "CAMA-03", piso: "P1" },
    ]);

    useEffect(() => {
        Modal.setAppElement("#root"); // Evita problemas de accesibilidad
    }, []);

    const eliminarCama = (id) => {
        setCamas(camas.filter((cama) => cama.id !== id));
    };

    return (
        <Modal
            isOpen={AbrirModal}
            onRequestClose={cerrarModal}
            style={customStyles}
            contentLabel="Gestión de Camas"
        >
            <h2 className="text-center">Gestión de Camas</h2>

            <button className="btn btn-success mb-3">
                Agregar Cama
            </button>

            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th>Cama</th>
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
                                    onClick={() => eliminarCama(cama.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-secondary mt-3" onClick={cerrarModal}>
                Cerrar
            </button>
        </Modal>
    );
}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "30vw",
        maxWidth: "90vw",
        maxHeight: "90vh",
        padding: "30px",
        overflow: "auto",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        zIndex: 1050, // 🔥 Asegura que el modal esté sobre otros elementos
    },
};
