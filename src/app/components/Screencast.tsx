import { motion } from 'motion/react';
import { Play, Monitor, Sparkles } from 'lucide-react';

export function Screencast() {
  return (
    <section id="screencast" className="relative py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase">Демонстрация</span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Как это всё{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              в реальной жизни
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Демонстрация платформы — от получения медиаплана до аналитики
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative group"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[28px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

          {/* Main container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="absolute top-0 inset-x-0 h-10 md:h-12 bg-white/[0.04] border-b border-white/8 flex items-center px-4 md:px-5 gap-2 z-10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 bg-white/[0.04] rounded-md border border-white/5 max-w-xs w-full">
                  <div className="w-3 h-3 rounded-sm bg-white/8" />
                  <span className="text-[10px] md:text-xs text-gray-600 truncate">app.mediahub.pro</span>
                </div>
              </div>
              <div className="w-14" />
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="screencast-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#screencast-grid)" />
              </svg>
            </div>

            {/* Fake UI skeleton */}
            <div className="absolute top-12 md:top-14 left-0 bottom-0 right-0 p-4 md:p-6">
              {/* Sidebar */}
              <div className="absolute top-12 md:top-14 left-0 bottom-0 w-[18%] border-r border-white/5 p-3 flex flex-col gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-white/5 shrink-0" />
                    <div className={`h-2 rounded-sm bg-white/5 ${i === 1 ? 'w-full bg-white/10' : 'w-3/4'}`} />
                  </div>
                ))}
              </div>
              {/* Main content area */}
              <div className="ml-[20%] space-y-3 pt-2">
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-32 bg-white/6 rounded-sm" />
                  <div className="h-3 w-20 bg-white/4 rounded-sm" />
                </div>
                {/* Table header */}
                <div className="flex gap-2 py-2 border-b border-white/5">
                  {[16, 24, 20, 14, 10, 16].map((w, i) => (
                    <div key={i} className={`h-2 rounded-sm bg-white/8`} style={{ width: `${w}%` }} />
                  ))}
                </div>
                {/* Table rows */}
                {[...Array(7)].map((_, row) => (
                  <div key={row} className="flex gap-2 py-1.5">
                    {[16, 24, 20, 14, 10, 16].map((w, i) => (
                      <div
                        key={i}
                        className="h-2 rounded-sm bg-white/[0.03]"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer"
              >
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-4 rounded-full bg-white/10"
                />
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl shadow-black/50 group-hover:bg-white/15 transition-colors">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" />
                </div>
              </motion.div>
            </div>

            {/* "Скоро" badge */}
            <div className="absolute top-16 md:top-[72px] right-4 md:right-6 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <Monitor className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-[11px] text-gray-500 tracking-wide">скоро</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
