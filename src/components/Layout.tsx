import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} React Test Project • Vite + React + TypeScript</p>
      </footer>
    </div>
  );
}
