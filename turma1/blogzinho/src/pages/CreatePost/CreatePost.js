// MEU CSS
import styles from "./CreatePost.module.css"

// MEUS IMPORTS
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")

    //validar URL

    //criar a lista de TAGS

    //checar todos os valores
    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createBy: user.displayName,
    })

  };

  return (
    <section className={`${styles.create}  container`}>
        <h2>Criar Post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input 
              type="text" 
              name="title"
              required
              placeholder="Pense em um título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}  
            />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input 
              type="text" 
              name="image"
              required
              placeholder="insira aqui uma imagem que represente seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}  
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <input 
              type="text" 
              name="body"
              required
              placeholder="Insira o conteúdo do seu post"
              onChange={(e) => setBody(e.target.value)}
              value={body}  
            />
          </label>
          <label>
            <span>Tags:</span>
            <input 
              type="text" 
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula(,)"
              onChange={(e) => setTags(e.target.value)}
              value={tags}  
            />
          </label>
          {!response.loading && <button className='btn btn-success my-4'>Criar Post</button>}
          {response.loading && <button className='btn btn-success my-4' disabled >Aguarde...</button> }
          { response.error && <p className={ `${styles.error} text-danger` }>{ response.error }</p> }
        </form>
    </section>
  )
}

export default CreatePost