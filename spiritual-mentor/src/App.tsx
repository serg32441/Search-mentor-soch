import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import AuthPage from './pages/AuthPage';
import CreatePostPage from './pages/CreatePostPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userRole, setUserRole] = React.useState<'user' | 'priest' | null>(null);

  const handleLogin = (role: 'user' | 'priest') => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="container header-content">
            <Link to="/" className="logo">
              ✝️ Духовный Наставник
            </Link>
            <nav className="nav-links">
              <Link to="/">Главная</Link>
              <Link to="/publications">Публикации</Link>
              {userRole === 'priest' && (
                <Link to="/create-post">Создать публикацию</Link>
              )}
              {isLoggedIn ? (
                <>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                    👤 {userRole === 'priest' ? 'Священник' : 'Пользователь'}
                  </span>
                  <button 
                    onClick={handleLogout}
                    style={{ 
                      background: 'rgba(255,255,255,0.2)', 
                      border: 'none', 
                      color: 'white', 
                      padding: '8px 16px', 
                      borderRadius: '20px',
                      cursor: 'pointer'
                    }}
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <Link to="/auth">Войти / Регистрация</Link>
              )}
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="/create-post" element={userRole === 'priest' ? <CreatePostPage /> : <HomePage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <div>© 2024 Поиск духовного наставника</div>
            <div className="footer-links">
              <a href="#">О проекте</a>
              <a href="#">Контакты</a>
              <a href="#">Помощь</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
