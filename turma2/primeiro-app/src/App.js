// AQUI FICAM MEUS CSS
import './App.css';

// AQUI FICAM MINHAS IMAGENS
import Beneficios from './assets/images/beneficios_1.png';

//AQUI FICAM MEUS COMPONENTES
import FirstComponent from './components/FirstComponents';
import History from './components/History';
import Contatos from './components/contatos';

function App() {
  return (
    <div>
      <History></History>
      <Contatos></Contatos>
      {/* MINHA DIV PRINCIPAL */}
      <h1>Uma nova visão do React</h1>
      <img src="./institucional_1.png" alt="" />
      <FirstComponent />
      <img src={Beneficios} alt="" />
    </div>
  );
}

export default App;
