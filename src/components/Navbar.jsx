
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <Link to="/" className="text-lg font-bold">Zanoza Shop</Link>
      <div className="space-x-4">
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина</Link>
      </div>
    </nav>
  );
}
