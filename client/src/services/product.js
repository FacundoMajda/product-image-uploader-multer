export const createProduct = async (productData) => {
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("description", productData.description);
  formData.append("price", productData.price);
  formData.append("image", productData.image);

  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error al crear el producto: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

// export const getProducts = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/products");

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Error al obtener los productos: ${errorText}`);
//     }

//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       const errorText = await response.text();
//       throw new Error(`Respuesta no es JSON: ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error al obtener los productos:", error);
//     throw error;
//   }
// };
