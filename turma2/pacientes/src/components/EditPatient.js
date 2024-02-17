import React from "react";

const EditPatient = () => {
return(
    <>
    <h3>EDIT FORM:</h3>
    <form >
        <label>
            Nome: <input 
            type='text'
            name='first_name' />
        </label>
        <label>
            Sobenome: <input
            type='text'
            name='last_name' />
        </label>
        <label>
            Grupo Sanguineo: <input
            type='text'
            name='blood' />
        </label>
        <button type='submit'>Edit</button>
    </form>
    </>
)}

export default EditPatient