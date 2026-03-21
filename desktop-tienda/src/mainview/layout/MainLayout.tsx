import { AsideBar } from "../components/ui/AsideBar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#0a0a0b] text-[#f5f5f0] overflow-hidden">
      <AsideBar />

      <main className="flex-1 overflow-y-auto relative">
        {/* Subtle texture/gradient overlay for premium feel if needed */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#0a0a0b] via-transparent to-[#141416] opacity-50" />
        <div className="relative z-10 w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
