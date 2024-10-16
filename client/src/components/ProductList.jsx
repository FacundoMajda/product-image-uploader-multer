/* eslint-disable react/prop-types */
const ProductList = ({ products }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Productos Creados</h3>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-bold">{product.name}</h4>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-sm font-semibold mt-1">
              Precio: ${product.price}
            </p>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="mt-2 w-full h-32 object-cover rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
