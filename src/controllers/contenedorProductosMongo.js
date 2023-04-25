import ProductoService from "../services/productoServices.js";
import CarritoService from "../services/carritoServices.js";

class ContenedorProductosMongo {
  constructor() {}

  async listarProductos(req, res) {
    let products = await ProductoService.listarProductos();
    //res.render("pages/products", { products });
    res.status(200).send(products);
  }

  async listarProductoPorId(req, res) {
    let { id } = req.params;    
    let products = await ProductoService.listarProductoPorId(id);    
    if (products === null) return res.status(400).send({ message: "Debe indicar un id / No existe producto con ese ID" });
    res.status(200).send(products);
    //res.render("pages/products", { products });
  }

  async altaProducto (req, res) {
    let { codigo, descripcion, precio, stock, foto } = req.body;
    try {
      if ((!codigo, !descripcion, !precio, !stock, !foto)) return res.status(400).send({ message: "Todos los campos son requeridos" });
      let product = await ProductoService.altaProducto({ codigo, descripcion, precio, stock, foto });
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);      
    }
  }

  async insertarProductos(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      const product = await ProductoService.listarProductoPorId(id_prod);
      const cart = await CarritoService.listarCarritoId(id_cart);
    } catch (error) {
      console.log(error.message);
    }
  }

  async actualizarProductoId(req, res) {    
    let { id } = req.params;
    let { body } = req;    
    let product = await ProductoService.actualizaProducto({ _id: id }, body);
    if (!product)
      return res.status(204).send({ message: "Debe indicar un id / No existe producto con ese ID" });
    res.status(200).send(product);    
  }

  async borrarProductoPorId(req, res) {
    let { id } = req.params;
    let result = await ProductoService.borrarProductoPorId({ _id: id });
    console.log("Contenedor");
    console.log(result);
    if (!result)
      return res.status(204).send({ message: "Debe indicar un id / No existe producto con ese ID" });
    res.status(200).send(result); 
  }




  async borrarProductoCarritoPorId(id, idProd) {
    try {
      let list = [];
      let newList = [];

      const result = await ProductoService.borrarProductoPorId(id, idProd)
      const dataObj = await this.getById(id);
      list.push(...dataObj.productos);
      for (let i = 0; i <= list.length - 1; i++) {
        if (list[i]._id.toString() != idProd) {
          newList.push(list[i]);
        }
      }
      return this._table.findByIdAndUpdate(id, { productos: newList });
    } catch (error) {
      console.log(error.message);
    }
  }
}
  
export default ContenedorProductosMongo;
  