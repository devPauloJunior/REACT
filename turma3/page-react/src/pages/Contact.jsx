import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-class'>
        <h2>Entre em Contato com a gente</h2>
        <label>
            Nome: <input type="text" />
        </label>
        <hr />
        <label>
            E-mail:<input type="email" />
        </label>
        <hr />
        <label>
            Mensagem: <textarea cols="30" rows="10"></textarea>
        </label>
        <hr />
        <button type='button'>Enviar</button>
    </div>
  )
}

export default Contact