import { useState } from 'react'

function App() {
  const [ todos, steTodos ] = useState([
    { id: 1,
      text: "Criar funcionalidade X para o sistema.",
      category: "Trabalho",
      isComplete: false,
    },
    { id: 2,
      text: "Ir para academia.",
      category: "Pessoal",
      isComplete: false,
    },
    { id: 3,
      text: "Estudar React.",
      category: "Estudos",
      isComplete: false,
    },
  ]);

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todos-list">
        { todos.map((todo) => 
          <div className="todo">
            <div className="content">
              <p>{ todo.text }</p>
              <p className="category">({ todo.category })</p>
            </div>
            <div>
              <button>Completar</button>
            </div>
          </div>        
        )}
      </div>
    </div>
  )
}

export default App
