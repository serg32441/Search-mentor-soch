import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">🙏 Духовный Наставник</div>
          <div className="nav-links">
            <Link to="/">Главная</Link>
            <Link to="/publications">Публикации</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/publications" element={<PublicationsPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Поиск духовного наставника. MVP версия.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
