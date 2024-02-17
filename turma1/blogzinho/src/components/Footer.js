// MEU CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={ `${styles.footer} d-flex flex-column align-items-center py-2`  }>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Blogzinho &copy; 2023</p>
    </footer>
  )
}

export default Footer