import React from "react";
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';

const PatientList = () => {
    return (
      <>
      <h3>LISTA DE PACIENTES</h3>
      <table border={"2px"} cellPadding={"10px"}>
        <thead>
            <tr>
                <td>Nome</td>
                <td>Ultimo Nome</td>
                <td>Grupo Sanguineo</td>
                <td>Ação</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
      </>  
)}

export default PatientList;