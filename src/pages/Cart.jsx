import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>{item.price} ₽</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Удалить</button>
              </li>
            ))}
          </ul>
          <p className="font-semibold">Итого: {total} ₽</p>
          <button onClick={clearCart} className="mt-4 bg-black text-white px-4 py-2">Оформить заказ</button>
        </>
      )}
    </div>
  );
}
