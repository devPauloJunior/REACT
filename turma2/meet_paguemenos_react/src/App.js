import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap';
import './App.css';
import "./Styles/Footer.css"
import Redirect from './Components/Redirect';
import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <>
      <UserContextProvider>
          <Redirect />
      </UserContextProvider>
    </>
  );
}

export default App;
