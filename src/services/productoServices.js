import { ProductPersist } from "../persistence/index.persistence.js";

const productPersist = new ProductPersist();

class ProductoService {
  constructor() {}

  async listarProductos() {
    let products = await productPersist.listarProductos();
    return products;
  }

  async listarProductoPorId(id_prod) {
    try {
      let product = await productPersist.listarProductoPorId(id_prod);      
      return product;
    } catch (error) {
        console.log(error.message);
    }
  }

  async altaProducto(objeto){
    try {
      let product = await productPersist.altaProducto(objeto);      
      return product;
    } catch (error) {
      console.log(error.message);
    }
  }

  async actualizaProducto(id, params){
    try {
      let product = productPersist.actualizarProductoId(id, params);      
      return product;
    } catch (error) {      
      console.log(error.message);
    }
  }

  borrarProductoPorId(id){
    try {
      let resultado = productPersist.borrarProductoPorId(id);
      return resultado
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new ProductoService();