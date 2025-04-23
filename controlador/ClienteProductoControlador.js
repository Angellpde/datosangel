const modelo = require("../modelo/ClienteProductoModelo");

class ClienteProdcutoControlador {
  // Obtener todos los productos
  static async todoProductos(req, res) {
    try {
      const producto = await modelo.todoProducto();
      res.json(producto);
    } catch (err) {
      res.status(500).json({ error: "Hubo un error al obtener los Productos" });
    }
  }

  // Buscar articulo por articulo
  static async buscarPorPro(req, res) {
    const { t1: pro } = req.params;
    try {
      const users = await modelo.buscarPorPro(pro);
      if (!users.length) {
        return res.status(404).json({ error: "Producto no encontrado!" });
      }
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: "Hubo un error al obtener el Producto" });
    }
  }
}

module.exports = ClienteProdcutoControlador;
