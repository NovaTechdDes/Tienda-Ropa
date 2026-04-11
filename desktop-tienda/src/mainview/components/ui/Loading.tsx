import { Loader2 } from 'lucide-react'

export const Loading = (text: {text: string}) => {
  return (
    <div className='flex items-center justify-center p-12 bg-[#141416] rounded-3xl border border-white/5'>
        <Loader2 className="animate-spin text-[#d4af37]" />
        <span className='ml-2 text-sm text-[#f5f5f0]'>{text.text}</span>
    </div>
  )
}
