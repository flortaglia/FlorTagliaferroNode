const { Router } = require('express')
const router = Router()
const isNumber = require('is-number');
const Contenedor = require('../Contenedor')

const productos = new Contenedor()

router.get('/productos', (req, res) => {
    res.json(productos.getAll())
})

router.get('/productos/:id', (req, res) => {
    const id = Number(req.params.id)
    if(!isNumber(id)){return res.json({ error: "El parámetro no es un número" })}
    const elemento = productos.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Producto no encontrado"})}
    res.json(elemento)
})

router.post('/productos', (req, res) => {
    const {title, price, thumbnail} = req.body 
    const elemento = productos.newProduct(title, price, thumbnail)
    res.json(elemento)
    res.statusCode=201
    // res.sendStatus(201) 
    // se quito xq genera=> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
})

router.put('/productos/:id', (req, res) => {
    const {title, price, thumbnail} = req.body
    const id = Number(req.params.id)
    if(!isNumber(id)){return res.json({ error: "El parámetro no es un número" })}
    const elemento = productos.getById(id)
    if(!elemento.length){return res.status(404).json({error: "Producto no encontrado"})}
    productos.update(id, title, price, thumbnail)
    const elementChanged = productos.getById(id)
    res.json(elementChanged)
    
})

router.delete('/productos/:id', (req, res) => {
    const id = Number(req.params.id)
    if(!isNumber(id)){return res.json({ error: "El parámetro no es un número" })}
    productos.deleteById(id)
    res.json(productos.getAll())
})

module.exports = router