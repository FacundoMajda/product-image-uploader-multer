import { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import { ErrorMessage, SuccessMessage } from "../components/Messages";
import { createProduct } from "../services/product";

const ProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     try {
  //       const fetchedProducts = await getProducts();
  //       setProducts(fetchedProducts);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setErrorMessage(
  //         "Error al obtener los productos. Por favor, inténtelo de nuevo."
  //       );
  //     }
  //   };

  //   loadProducts();
  // }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
    console.log(`📝 Campo actualizado: ${name}`);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "El nombre es obligatorio";
    if (!product.description)
      newErrors.description = "La descripción es obligatoria";
    if (!product.price) newErrors.price = "El precio es obligatorio";
    if (!product.image) newErrors.image = "La imagen es obligatoria";
    if (
      product.image &&
      !["image/jpeg", "image/png"].includes(product.image.type)
    ) {
      newErrors.image = "Solo se permiten archivos .jpg y .png";
    }
    setErrors(newErrors);
    console.log("🔍 Validación del formulario:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Enviando formulario");
    if (validateForm()) {
      setIsLoading(true);
      setSuccessMessage("");
      setErrorMessage("");
      try {
        const createdProduct = await createProduct(product);
        setProducts([...products, createdProduct]);
        setSuccessMessage("¡Producto creado con éxito!");
        setProduct({ name: "", description: "", price: "", image: null });
        console.log("✅ Producto creado:", createdProduct);
      } catch (error) {
        setErrorMessage(
          "Error al crear el producto. Por favor, inténtelo de nuevo."
        );
        console.error("❌ Error al crear el producto:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>
      <CreateProduct
        product={product}
        errors={errors}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {successMessage && <SuccessMessage message={successMessage} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {/* <ProductList products={products} /> */}
    </div>
  );
};

export default ProductPage;
