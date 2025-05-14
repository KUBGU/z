import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existing = storedUsers.find(u => u.email === email && u.password === password);
    if (existing) setUser(existing);
    else throw new Error('Invalid credentials');
  };

  const register = (email, password) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers.find(u => u.email === email)) throw new Error('User exists');
    const newUser = { email, password };
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
