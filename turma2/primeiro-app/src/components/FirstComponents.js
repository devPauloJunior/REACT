import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //essa é a variavel do NOME
    let nome = 'um só coração';
    return (
        <div>
            <h1>Aqui temos uma Template Expression {nome}!</h1>
            <p>A soma de 2 + 2 é {2 + 2}</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;
