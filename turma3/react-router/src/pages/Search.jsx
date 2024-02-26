import { useSearchParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Search = () => {
  let [searchParams] = useSearchParams();
    console.log(searchParams)
  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items,  error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis Aqui:</h1>
      <ul>
      { items &&
            items.map((product) => (
                <li key={product.id}>
                    <h3>{ product.name }</h3>
                    <p>R${ product.price }</p>
                    <Link to={ `/product/${product.id} ` }>Detalhes</Link>
                </li>
            ))}
      </ul>
    </div>
  );
};

export default Search;
