const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas
app.post('/createitem', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log( price)

    res.json({message: `O item ${name} foi criado com sucesso.`})
})

app.get('/', (req, res) => {

    res.json({ message: 'Minha Primeira API do Amontada Valley' })

})

app.listen(3000)
