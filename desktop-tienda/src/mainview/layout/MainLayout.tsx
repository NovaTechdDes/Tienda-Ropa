import { AsideBar } from "../components/ui/AsideBar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[var(--atelier-ink)] text-[var(--atelier-parchment)] transition-colors duration-300 overflow-hidden">
      <AsideBar />

      <main className="flex-1 overflow-y-auto relative">
        {/* Subtle texture/gradient overlay for premium feel */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[var(--atelier-surface-1)] via-transparent to-[var(--atelier-surface-2)] opacity-30" />
        <div className="relative z-10 w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
