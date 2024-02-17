import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/MenuGerente.css";
import "../../Styles/FotodePerfil.css";
import { useGerentes } from "../../hooks/useGerentes";
import { UserContext } from "../../context/UserContext";
import 'bootstrap/js/dist/dropdown';
import { Box, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { useAppThemeContext } from "../../context/ThemeContext.tsx";

const MenuGerente = () => {
  const theme = useTheme();
  const { gerentes } = useGerentes([]);
  const { idGerentes } = useContext(UserContext);
  const { toggleTheme } = useAppThemeContext();

  return (
    <div className="gerente__responsivo MeuGerente">

      <div className="sesaoPerfil">
        {gerentes.filter(gerente => gerente.manager_id == idGerentes).map(gerente => {
          return (
            <div key={gerente.manager_id}>
              <img className="fotoDePerfil" src={gerente.manager_image} alt="Foto perfil gerente" />
              <h4 className="gerente__nome">{gerente.manager_name}</h4>
              <h6 className="gerente__cargo">{gerente.manager_function}</h6>
              {/* <br></br>token: {gerente.manager_token} */}
            </div>
          )
        })}
      </div>
      <div className="accordion accordion-flush " id="accordionFlushExample">
        <Link to="/AGerente" className="MenuGerente__Link " >
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-journal-plus" />Agendar
          </button>
        </Link>
        <Link to="/PGerente" className="MenuGerente__Link" >
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-clipboard2-data"></i>
            <p>Pdi</p>
          </button>
        </Link>
        <Link to="/HGerente" className="MenuGerente__Link">
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-clock-history"></i>
            <p>Históricos</p>
          </button>
        </Link>
        <Link to="/GGrafico" className="MenuGerente__Link">
          <button className="accordion-button collapsed MenuGerente__Button btn__home">
            <i className="bi bi-clock-history"></i>
            <p>Gráficos</p>
          </button>
        </Link>
        
        {/* <Box>
            <List component="nav">
            <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                    <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
            </ListItemButton>
            </List>
        </Box> */}
      </div>
    </div>
  );
};

export default MenuGerente;
