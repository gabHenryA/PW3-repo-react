const express = require('express')
const cors = require('cors')

const routerMaterial = require('./routes/routesCategorias')
const routesCategoria = require('./routes/routesMateriais')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', routerMaterial)
app.use('/', routesCategoria)

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000')
})