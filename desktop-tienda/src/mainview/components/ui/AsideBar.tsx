import { Link, useLocation } from 'react-router';
import { ReceiptText, Package, Settings, ChevronRight, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const AsideBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Ventas', path: '/ventas', icon: <ReceiptText size={18} /> },
    { name: 'Productos', path: '/productos', icon: <Package size={18} /> },
    { name: 'Clientes', path: '/clientes', icon: <User size={18} /> },
  ];

  return (
    <aside className="w-64 h-full border-r border-[var(--atelier-border)] bg-[var(--atelier-ink)] flex flex-col z-20 shadow-2xl transition-colors duration-300">
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--neutral)] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <p className="text-2xl text-[var(--primary)] font-bold">P</p>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-widest uppercase text-[var(--atelier-parchment)]">Pink Chajari</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--atelier-parchment-muted)] font-medium leading-none mt-1">Gestion</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4">
        <div className="space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  group relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? 'bg-[var(--atelier-border-soft)] text-[var(--atelier-parchment)] shadow-sm'
                      : 'text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)] hover:bg-[var(--atelier-border-soft)]'
                  }
                `}
              >
                <div className="flex items-center gap-3 z-10">
                  <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-[var(--secondary)]' : 'group-hover:scale-110'}`}>{link.icon}</span>
                  <span className="text-sm font-medium tracking-wide">{link.name}</span>
                </div>

                {/* Signature Indicator (Active State) */}
                {isActive && (
                  <>
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[var(--primary)] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                    <ChevronRight size={14} className="text-[var(--primary)]" />
                  </>
                )}

                {/* Subtle hover effect background */}
                {!isActive && <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,175,55,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Configuracion & Theme Toggle */}
      <div className="p-4 mt-auto border-t border-[var(--atelier-border)] space-y-4">
        <div className="flex justify-center">
          <ThemeToggle />
        </div>

        <Link
          to="/configuracion"
          className={`
            group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              location.pathname === '/configuracion'
                ? 'bg-[var(--atelier-border-soft)] text-[var(--atelier-parchment)] shadow-sm'
                : 'text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)] hover:bg-[var(--atelier-border-soft)]'
            }
          `}
        >
          <Settings size={18} className="group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-sm font-medium">Configuración</span>
        </Link>
      </div>
    </aside>
  );
};
