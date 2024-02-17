import React from 'react'

const Container = ({ children, newValue }) => {
  return (
    <div>
        <h3>Título do Container</h3>
        { children }
        { newValue }
    </div>
  )
}

export default Container