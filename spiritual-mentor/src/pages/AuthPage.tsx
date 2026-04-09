import React, { useState } from 'react';

const AuthPage: React.FC<{ onLogin: (role: 'user' | 'priest') => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isPriest, setIsPriest] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confession: '',
    denomination: '',
    bio: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${isLogin ? 'Вход' : 'Регистрация'} выполнен${isPriest ? 'а (священник)' : 'а'}!\n\nИмя: ${formData.name}\nEmail: ${formData.email}`);
    onLogin(isPriest ? 'priest' : 'user');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 className="section-title">{isLogin ? 'Вход' : 'Регистрация'}</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', justifyContent: 'center' }}>
        <button
          className={`filter-tab ${!isPriest ? 'active' : ''}`}
          onClick={() => setIsPriest(false)}
        >
          👤 Пользователь
        </button>
        <button
          className={`filter-tab ${isPriest ? 'active' : ''}`}
          onClick={() => setIsPriest(true)}
        >
          ✝️ Священник
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Имя</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Пароль</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {isPriest && !isLogin && (
          <>
            <div className="form-group">
              <label className="form-label">Конфессия</label>
              <select
                name="confession"
                className="form-input"
                value={formData.confession}
                onChange={handleChange}
                required
              >
                <option value="">Выберите конфессию</option>
                <option value="Православие">Православие</option>
                <option value="Католицизм">Католицизм</option>
                <option value="Протестантизм">Протестантизм</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Деноминация</label>
              <input
                type="text"
                name="denomination"
                className="form-input"
                value={formData.denomination}
                onChange={handleChange}
                placeholder="Например: Русская Православная Церковь"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Местоположение</label>
              <input
                type="text"
                name="location"
                className="form-input"
                value={formData.location}
                onChange={handleChange}
                placeholder="Город, страна"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">О себе</label>
              <textarea
                name="bio"
                className="form-input form-textarea"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Расскажите о вашем служении..."
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          {isLogin ? '🔐 Войти' : '✅ Зарегистрироваться'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#7f8c8d' }}>
        {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ background: 'none', border: 'none', color: '#667eea', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
