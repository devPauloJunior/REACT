import React from "react";

const AddPatient = () => {
return(
    <>
    <h3>ADD FORM:</h3>
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
        <button type='submit'>Add</button>
    </form>
    </>
)}

export default AddPatient