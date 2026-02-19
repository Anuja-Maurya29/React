import express from 'express'
import { getProducts, search,  } from '../controllers/productController.js'
const productRouter= express.Router()

productRouter.get('/products',getProducts)
productRouter.get('/products/search',search)

export default productRouter