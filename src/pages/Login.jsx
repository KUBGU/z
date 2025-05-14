import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    try {
      login(email, password);
      alert('Успешный вход');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Вход</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="border p-2" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Пароль" className="border p-2" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="bg-black text-white p-2">Войти</button>
      </form>
    </div>
  );
}
