import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import ContenedorProductosMongo from '../controllers/contenedorProductosMongo.js'

const productosRouter = Router();
const controllerProducto = new ContenedorProductosMongo();

productosRouter
  .get("/", controllerProducto.listarProductos)
  .get("/:id", controllerProducto.listarProductoPorId)
  .post ("/", controllerProducto.altaProducto)
  .put("/:id", controllerProducto.actualizarProductoId)
  .delete ("/:id", controllerProducto.borrarProductoPorId)    
  // .get("/alta", auth, ContenedorProductosMongo.listarProductos)  
  
  

export default productosRouter;
