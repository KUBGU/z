
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';

export default function Catalog() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-2">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price} ₽</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
