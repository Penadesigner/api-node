const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000

const produtos = require('./src/produtos/produtos.json')

app.get('/produtos', (req,res) => {
    return res.json(produtos)
})

app.delete('/produtos/:id', (req,res) => {
    var id = req.params.id
    console.log(id);
})

app.listen(port, () => {
    console.log('server rodando');
})