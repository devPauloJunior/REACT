import { TextField } from "@mui/material";

const Search = ({ search, setSearch }) => {
    return (
        <div className='search'>
            <TextField sx={{ width: '100%' }} name='search' type="text" className="from__input" label="Pesquisar" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite o nome" />
        </div>
        // sx={{ width: '415%' }}
    );
}

export default Search; 