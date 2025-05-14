
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-4">Товар не найден.</div>;

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded-lg" />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="mt-2">{product.description}</p>
        <p className="text-xl mt-4 font-semibold">{product.price} ₽</p>
        <button onClick={() => addToCart(product)} className="mt-4 bg-black text-white px-4 py-2">Добавить в корзину</button>
      </div>
    </div>
  );
}
