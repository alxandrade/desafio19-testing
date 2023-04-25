class ProductoPersistence {
    constructor(table) {
      this._table = table;
    }
    
    // Listar TODOS los productos
    async listarProductos() {
      return await this._table.find();
    }

    // Listar un producto enviando su Id
    async listarProductoPorId(id) {
      try {
        return await this._table.find({ _id: id });
      } catch (error) {
        return null
      }
    }
    
    // Insertar un Producto en la Tabla productos
    async altaProducto(obj) {
      try {        
        const resultnvoProducto = await this._table.create(obj);               
        return resultnvoProducto;
      } catch (error) {
        console.log(error.message);
      }
    }
    
    // Actualizar los datos de un producto de un Id especifico
    async actualizarProductoId(id, params) {      
      try {        
        let result = await this._table.updateOne(id,params)
        return result
      } catch (error) {
        console.log(error.message);
      }   
    }
    
    // Borrar un producto de la tabla productos enviando su Id
    async borrarProductoPorId(id) { 
      try {
        let result = await this._table.deleteOne(id);
        return result  
      } catch (error) {
        return 0
      }     
    }
  }
  
  export default ProductoPersistence;