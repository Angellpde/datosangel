const dbService = require('./bd/Conexion');

class ClienteProductoModelo {
    // Obtener todos los aticulos con paginación
  static async todoProducto(pagina = 1) {
    const limite = 50;  // Número máximo de productos por página
    const offset = (pagina - 1) * limite;  // Calculamos el offset para la paginación
    const query = `SELECT * FROM productos ORDER BY idProducto ASC LIMIT ${limite} OFFSET ${offset}`;
    try {
      return await dbService.query(query);
    } catch (err) {
      throw new Error(`Error al obtener los productos: ${err.message}`);
    }

    
  }

  // Buscar articulo por prudcuto (autocompletado)
  static async buscarPorPro(pro) {
    const query = 'SELECT * FROM productos WHERE producto LIKE ?';
    try {
      return await dbService.query(query, [`%${pro}%`]);
    } catch (err) {
      throw new Error(`Error al buscar el producto por nombre: ${err.message}`);
    }
  }
  
}

module.exports = ClienteProductoModelo;