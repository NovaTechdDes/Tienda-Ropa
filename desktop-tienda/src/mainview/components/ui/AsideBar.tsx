import { Link, useLocation } from "react-router";
import {
  ReceiptText,
  Package,
  Settings,
  ChevronRight,
  Sparkles,
  User,
} from "lucide-react";

export const AsideBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Ventas", path: "/ventas", icon: <ReceiptText size={18} /> },
    { name: "Productos", path: "/productos", icon: <Package size={18} /> },
    { name: "Clientes", path: "/clientes", icon: <User size={18} /> },
  ];

  return (
    <aside className="w-64 h-full border-r border-[rgba(255,255,255,0.06)] bg-[#0a0a0b] flex flex-col z-20 shadow-2xl">
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#d4af37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <Sparkles className="text-[#0a0a0b]" size={18} />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-widest uppercase text-[#f5f5f0]">
            Pink Chajari
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] font-medium leading-none mt-1">
            Gestion
          </p>
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
                      ? "bg-[rgba(255,255,255,0.03)] text-[#f5f5f0]"
                      : "text-[#a1a1aa] hover:text-[#f5f5f0] hover:bg-[rgba(255,255,255,0.01)]"
                  }
                `}
              >
                <div className="flex items-center gap-3 z-10">
                  <span
                    className={`transition-transform duration-300 ${isActive ? "scale-110 text-[#d4af37]" : "group-hover:scale-110"}`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    {link.name}
                  </span>
                </div>

                {/* Signature Indicator (Active State) */}
                {isActive && (
                  <>
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#d4af37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                    <ChevronRight size={14} className="text-[#3f3f46]" />
                  </>
                )}

                {/* Subtle hover effect background */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(212,175,55,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Configuracion */}
      <div className="p-4 mt-auto">
        <Link
          to="/configuracion"
          className={`
            group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
            ${
              location.pathname === "/configuracion"
                ? "bg-[rgba(255,255,255,0.03)] text-[#f5f5f0]"
                : "text-[#a1a1aa] hover:text-[#f5f5f0] hover:bg-[rgba(255,255,255,0.01)]"
            }
          `}
        >
          <Settings
            size={18}
            className="group-hover:rotate-45 transition-transform duration-500"
          />
          <span className="text-sm font-medium">Configuración</span>
        </Link>
      </div>
    </aside>
  );
};
