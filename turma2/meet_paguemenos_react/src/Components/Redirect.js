import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Auth from "./Auth";
import PageGerente from "./PageGerente";
import PageColaborador from "./PageColaborador";
import MainGrid from "./Gerente/MainGrid";
import MainColaboradorGrid from "./Colaborador/MainColaboradorGrid";

const Redirect = () => {
    const { nivelUser } = useContext(UserContext);

    return (
        <div>    
            {nivelUser === 0 && <Auth />}
            {nivelUser === 1 && <MainGrid />}
            {nivelUser === 2 && <MainColaboradorGrid />}
        </div>
    )
}

export default Redirect