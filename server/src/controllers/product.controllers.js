import { v4 as uuidv4 } from "uuid";
import { uploadLocal } from "../config/multer.js";

const products = [
  {
    id: "1a2b3c4d",
    name: "Producto Ejemplo",
    description: "Este es un producto de ejemplo.",
    price: 29.99,
    imageUrl: "/uploads/imagen-ejemplo.jpg",
  },
];

export const createProduct = (req, res) => {
  try {
    console.log("🚀 Iniciando proceso de creación de producto");

    uploadLocal.single("image")(req, res, (err) => {
      if (err) {
        console.error("❌ Error al subir la imagen:", err);
        return res.status(400).json({ error: "Error al subir la imagen." });
      }

      if (!req.file) {
        console.error("❌ Se debe subir una imagen");
        return res.status(400).json({ error: "Se debe subir una imagen." });
      }

      const { name, description, price } = req.body;
      if (!name || !description || !price) {
        console.error("❌ Faltan datos del producto");
        return res.status(400).json({ error: "Faltan datos del producto." });
      }

      const newProduct = {
        id: uuidv4(),
        name,
        description,
        price: parseFloat(price),
        imageUrl: `/uploads/${req.file.filename}`,
      };

      products.push(newProduct);

      console.log("✅ Producto creado correctamente:", newProduct);
      return res
        .status(201)
        .json({ message: "Producto creado", product: newProduct });
    });
  } catch (error) {
    console.error(
      "❌ Error inesperado durante la creación del producto:",
      error
    );
    return res
      .status(500)
      .json({ error: "Error inesperado durante la creación del producto" });
  }
};

export const getProducts = (req, res) => {
  try {
    console.log("📦 Obteniendo lista de productos");
    res.status(200).json({ products });
  } catch (error) {
    console.error("❌ Error al obtener los productos:", error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};
