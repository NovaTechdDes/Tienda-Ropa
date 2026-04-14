import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeStore } from '../../store/theme.store';

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const options = [
    { value: 'light', icon: <Sun size={16} />, label: 'Luz' },
    { value: 'system', icon: <Monitor size={16} />, label: 'Auto' },
    { value: 'dark', icon: <Moon size={16} />, label: 'Noche' },
  ] as const;

  return (
    <div className="flex items-center p-1 bg-[var(--atelier-surface-1)] border border-[var(--atelier-border)] rounded-full shadow-sm w-fit transition-all duration-300">
      {options.map((option) => {
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`
              relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-500
              ${isActive 
                ? 'bg-[#d4af37] text-white shadow-[0_0_12px_rgba(212,175,55,0.4)] scale-105 z-10' 
                : 'text-[var(--atelier-parchment-muted)] hover:text-[var(--atelier-parchment)] hover:bg-[var(--atelier-border-soft)]'
              }
            `}
            title={option.label}
          >
            {option.icon}
            {isActive && (
              <span className="absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {option.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
