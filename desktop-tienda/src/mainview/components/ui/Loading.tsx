import { Loader2 } from 'lucide-react';

export const Loading = (text: { text: string }) => {
  return (
    <div className="flex items-center justify-center p-12 dark:bg-[#141416] bg-[var(--primary)] rounded-3xl border border-white/5">
      <Loader2 className="animate-spin dark:text-[#d4af37] text-[#4e4e17]" />
      <span className="ml-2 text-sm dark:text-[#f5f5f0] text-[#4e4e17] font-bold">{text.text}</span>
    </div>
  );
};
