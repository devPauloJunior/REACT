import React from 'react'
import './Main.css'

const Main = (props) => {
    return (
        <main className='main-class'>
            <h2>MAIN</h2>
            <div>
                {props.children}
            </div>
        </main>
    )
}

export default Main