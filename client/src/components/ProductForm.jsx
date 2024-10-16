/* eslint-disable react/prop-types */
import { Loader } from "lucide-react";

const ProductForm = ({
  product,
  errors,
  isLoading,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={product.name}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
      )}
    </div>
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        Descripción
      </label>
      <textarea
        id="description"
        name="description"
        value={product.description}
        onChange={handleChange}
        rows="3"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
      ></textarea>
      {errors.description && (
        <p className="mt-1 text-sm text-red-500">{errors.description}</p>
      )}
    </div>
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        Precio
      </label>
      <input
        type="number"
        id="price"
        name="price"
        value={product.price}
        onChange={handleChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.price && (
        <p className="mt-1 text-sm text-red-500">{errors.price}</p>
      )}
    </div>
    <div>
      <label
        htmlFor="image"
        className="block text-sm font-medium text-gray-700"
      >
        Imagen
      </label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleChange}
        accept=".jpg,.png"
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100"
      />
      {errors.image && (
        <p className="mt-1 text-sm text-red-500">{errors.image}</p>
      )}
      {product.image && (
        <p className="mt-1 text-sm text-green-500">
          Archivo seleccionado: {product.image.name}
        </p>
      )}
    </div>
    <button
      type="submit"
      disabled={isLoading}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {isLoading ? (
        <Loader className="animate-spin h-5 w-5 mr-3" />
      ) : (
        "Crear Producto"
      )}
    </button>
  </form>
);

export default ProductForm;
